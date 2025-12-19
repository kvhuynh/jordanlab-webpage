// import axios from "axios";
// const API = import.meta.env.VITE_API_URL;
// const http = axios.create({
// 	// baseURL: "http://localhost:3000", // your backend URL
// 	// baseURL: "https://jordanlab-backend.onrender.com" //production
// 	baseURL: API, //production
// });

// export const getMaps = async () => {
// 	console.log("fetching maps");
// 	const res = await http.get(`/api/v1/maps/embed`);
// 	return res.data;
// };

export const getMaps = async (): Promise<{ embedUrl: string }> => {
  console.log("fetching maps");

  const res = await fetch(`/.netlify/functions/maps`);

  if (!res.ok) {
    throw new Error("Failed to fetch maps");
  }

  const data = await res.json(); // <-- parse the JSON returned by the function
  return data; // { embedUrl: '...' }
};
