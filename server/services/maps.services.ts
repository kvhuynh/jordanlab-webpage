export const getMapKey = (req: any, res: any) => {
	const key = process.env.GOOGLE_MAPS_API_KEY;

	const url = `https://www.google.com/maps/embed/v1/place?key=${key}&q=750+Republican+St,+Seattle,+WA+98109`;

	res.json({ url });

    console.log(url);
    
};

module.exports = { getMapKey }