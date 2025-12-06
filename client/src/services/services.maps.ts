
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
const http = axios.create({
	// baseURL: "http://localhost:3000", // your backend URL
    // baseURL: "https://jordanlab-backend.onrender.com" //production
    baseURL: API //production

});


export const getMaps = async () => {
	console.log("fetching maps");
	const res = await http.get(`/api/v1/maps/embed`);
	return res.data;
};



