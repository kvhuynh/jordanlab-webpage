const axios = require("axios");

export const getAllPublications = async (orcidId: string) => {
	const URL = `https://pub.orcid.org/v3/${orcidId}/works`;

	const res = await axios.get(URL, {
		headers: { Accept: "application/json" },
	});

    const publications: any = {};

	const groups = res.data.group || [];
	const dois: string[] = [];

	for (let i = 0; i < groups.length; i++) {
		const group = groups[i];
		const workSummaries = group["work-summary"] || [];

		for (let j = 0; j < workSummaries.length; j++) {
			const work = workSummaries[j];
			const externalIds =
				(work["external-ids"] && work["external-ids"]["external-id"]) || [];

			for (let k = 0; k < externalIds.length; k++) {
				const id = externalIds[k];
				if (id["external-id-type"] === "doi") {
					dois.push(id["external-id-value"]);
				}
			}
		}
	}
    _getAuthors(dois);

	return res.data;
};

// Private methods
const _getAuthors = async (dois: string[]) => {
    const authors: string[] = [];
    const test: any[] = [];
    const wtf: any[] = [];
    const URL = "https://api.crossref.org/works/";
    
    for (let i = 0; i < dois.length; i++) {
        // authors.push(URL + element)
        authors.push(URL + dois[i]);
    }

    for (let j = 0; j < authors.length; j++) {
        const res = await axios.get(authors[j],  {
            headers: { Accept: "application/json" }
        })
        test.push(res.data);
    }

    // for (let k = 0; k < test.length; k++) {
    //     // wtf.push(test[k].author)

    // }

    console.log(test[0].message.author);
    

    console.log(wtf);
    

	return;
};

module.exports = {
	getAllPublications,
};
