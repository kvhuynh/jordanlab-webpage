import { Carousel } from "react-responsive-carousel";

export const Home: React.FC = () => {
	return (
		<Carousel>
			<div>
				<img src="https://bit.ly/dan-abramov" />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src="https://bit.ly/dan-abramov" />
				<p className="legend">Legend 1</p>
			</div>
		</Carousel>
	);
};

// lab news

export default Home;
