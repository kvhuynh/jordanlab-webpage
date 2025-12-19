import type { Handler } from "@netlify/functions";
// const API = import.meta.env.VITE_API_URL;

// Example: returning a Google Maps embed URL based on an address
export const handler: Handler = async (event) => {
	const address = event.queryStringParameters?.address;
	const apiKey = process.env.GOOGLE_MAPS_API_KEY;
	console.log("wtf");
	
	if (!address) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing 'address' query parameter" }),
		};
	}


	const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=750+Republican+St,+Seattle,+WA+98109`;
	
	return {
		statusCode: 200,
		body: JSON.stringify({ embedUrl }),
	};
};
