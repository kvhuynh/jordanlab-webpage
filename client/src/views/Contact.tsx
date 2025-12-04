export const Contact: React.FC = () => {
	const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

	return (
		<>
			<div>contact</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<div>test</div>
			<iframe
				width="600"
				height="450"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=750+Republican+St,+Seattle,+WA+98109/@47.6234465,-122.3407912`}
			></iframe>
		</>
	);
};

export default Contact;
