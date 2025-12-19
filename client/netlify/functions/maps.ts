import type { Handler } from "@netlify/functions";
// 
// Example: returning a Google Maps embed URL based on an address
export const handler: Handler = async (event) => {
	const address = event.queryStringParameters?.address;

	if (!address) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Missing 'address' query parameter" }),
		};
	}

	const apiKey = process.env.GOOGLE_MAPS_API_KEY; // add this in Netlify dashboard
	const encodedAddress = encodeURIComponent(address);

	// For example: returning an iframe embed URL
	const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;

	return {
		statusCode: 200,
		body: JSON.stringify({ embedUrl }),
	};
};
