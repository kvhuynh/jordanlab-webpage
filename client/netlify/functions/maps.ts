import type { Handler } from "@netlify/functions";
// const API = import.meta.env.VITE_API_URL;

// Example: returning a Google Maps embed URL based on an address
export const handler: Handler = async (event) => {
	const apiKey = process.env.GOOGLE_MAPS_API_KEY;
	
	if (!apiKey) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing API key" }),
		};
	}


	const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=750+Republican+St,+Seattle,+WA+98109`;
	
	return {
		statusCode: 200,
		body: JSON.stringify({ embedUrl }),
	};
};
