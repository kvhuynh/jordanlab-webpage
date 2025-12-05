// import axios, { AxiosResponse } from "axios";



import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:3000", // your backend URL
});


export const getMaps = async () => {
	console.log("fetching maps");
	const res = await http.get(`/api/v1/maps/embed`);
	return res.data;
};



