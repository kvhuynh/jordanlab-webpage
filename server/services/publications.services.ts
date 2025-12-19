const axios = require("axios");

type Publication = {
	title: string | null;
	year: string | null;
	month: string | null;
	day: string | null;
	sortKey: string; // "YYYY-MM-DD" for sorting recency
	doi: string | null;
	url: string | null;
	authors: Array<string> | null;
};

export const getAllPublications = async (orcidId: string) => {
	console.log("getting publications");
	
	const URL = `https://pub.orcid.org/v3/${orcidId}/works`;

	const res = await axios.get(URL, {
		headers: { Accept: "application/json" },
	});
	const publicationsMap = new Map<string, Publication>();
	const groups = res.data.group || [];

	for (let i = 0; i < groups.length; i++) {
		const group = groups[i];
		const workSummaries = group["work-summary"] || [];

		for (let j = 0; j < workSummaries.length; j++) {
			const work = workSummaries[j];
			const titleRaw = work?.title?.title?.value;
			if (!titleRaw) continue;

			const title = titleRaw.toLowerCase().trim(); // normalized for dedup
			if (publicationsMap.has(title)) continue; // skip duplicates

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
			const authors: string[] = [];
			// Add to map
			publicationsMap.set(title, {
				title: titleRaw,
				year,
				month,
				day,
				sortKey,
				doi,
				url,
				authors,
			});
		}
	}

	// Convert map to array
	let publications: Publication[] = Array.from(publicationsMap.values());

	// Sort by recency
	publications.sort((a, b) => b.sortKey.localeCompare(a.sortKey));

	//  = _getAuthors(publications);
	const fullPublications: Promise<Publication[]> = _getAuthors(publications);
	return fullPublications;
};

// Private methods
const _getAuthors = async (publications: Publication[]): Promise<Publication[]> => {
	const URL = "https://api.crossref.org/works/";

	for (let publication in publications) {
		const query: string = (URL + publications[publication].doi);
		const res = await axios.get(query, {
			headers: { Accept: "application/json" },
		});
		const authors: string[] = res.data.message.author;
		publications[publication].authors = authors;
	}

	return publications;
};

module.exports = {
	getAllPublications,
};
	