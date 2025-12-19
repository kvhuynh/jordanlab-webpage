import type { Handler } from "@netlify/functions";

type Publication = {
    title: string | null;
    year: string | null;
    month: string | null;
    day: string | null;
    sortKey: string;
    doi: string | null;
    url: string | null;
    authors: Array<string> | null;
};

export const handler: Handler = async (event) => {
    try {
        const orcidId = event.queryStringParameters?.orcid;

        if (!orcidId) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing ORCID ID" }),
            };
        }

        const publications = await getAllPublications(orcidId);

        return {
            statusCode: 200,
            body: JSON.stringify(publications),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch publications" }),
        };
    }
};

const getAllPublications = async (orcidId: string): Promise<Publication[]> => {
    const URL = `https://pub.orcid.org/v3/${orcidId}/works`;

    const res = await fetch(URL, {
        headers: { Accept: "application/json" },
    });

    if (!res.ok) {
        throw new Error("ORCID request failed");
    }

    const data = await res.json();
    console.log(data);
    
    const publicationsMap = new Map<string, Publication>();
    const groups = data.group || [];

    for (const group of groups) {
        const workSummaries = group["work-summary"] || [];

        for (const work of workSummaries) {
            const titleRaw = work?.title?.title?.value;
            if (!titleRaw) continue;

            const titleKey = titleRaw.toLowerCase().trim();
            if (publicationsMap.has(titleKey)) continue;

            const externalIds = work["external-ids"]?.["external-id"] || [];
            const doiEntry = externalIds.find(
                (id: { [x: string]: string }) => id["external-id-type"] === "doi"
            );


            const doi = doiEntry?.["external-id-value"] ?? null;

            const date = work["publication-date"];
            const year = date?.year?.value ?? null;
            const month = date?.month?.value ?? null;
            const day = date?.day?.value ?? null;

            const sortKey = `${year ?? "0"}-${month ?? "0"}-${day ?? "0"}`;

            const url =
                work?.url?.value ?? doiEntry?.["external-id-url"]?.value ?? null;

            publicationsMap.set(titleKey, {
                title: titleRaw,
                year,
                month,
                day,
                sortKey,
                doi,
                url,
                authors: null,
            });
        }
    }

    const publications = Array.from(publicationsMap.values());

    publications.sort((a, b) => b.sortKey.localeCompare(a.sortKey));

    return await getAuthors(publications);
};

const getAuthors = async (
    publications: Publication[]
): Promise<Publication[]> => {
    const URL = "https://api.crossref.org/works/";

    const enriched = await Promise.all(
        publications.map(async (pub) => {
            if (!pub.doi) return pub;

            try {
                const res = await fetch(URL + pub.doi, {
                    headers: { Accept: "application/json" },
                });

                if (!res.ok) return pub;

                const data = await res.json();
                return {
                    ...pub,
                    authors: data.message?.author ?? null,
                };
            } catch {
                return pub;
            }
        })
    );

    return enriched;
};
