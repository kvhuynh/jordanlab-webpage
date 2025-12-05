// import axios, { AxiosResponse } from "axios";

// const http = axios.create({
//     baseURL: "https://pub.orcid.org/0000-0002-0602-2871/works"
// })

// export const getPublications = async () => {
//     console.log("fetching publications");
//     const res = await http.get("/");
//     return res.data;
// }

import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:3000", // your backend URL
});

export const getPublications = async (orcidId: string) => {
	console.log("fetching publications from backend");
	const res = await http.get(`/api/v1/publications/${orcidId}`);
    console.log(res)
	return res.data;
};


