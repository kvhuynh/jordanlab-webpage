// import { Box, Flex, Text } from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
// import videoSrc from "../assets/amoeba_timelapse.mp4";

// export const Home: React.FC = () => {
// 	return (
// 		<Flex direction={"column"} paddingTop={75}>
// 			{/* <Text textStyle={"6xl"} alignSelf={"flex-start"} marginBottom={"30px"}>
// 				Home
// 			</Text> */}
// 			<Box ml={"-0px"}>
// 				<video width="750" height="500" autoPlay muted loop>
// 					<source src={videoSrc} type="video/mp4" />
// 				</video>
// 			</Box>
// 		</Flex>
// 	);
// };

// // lab news

// export default Home;
import { Box, Flex, Text } from "@chakra-ui/react";
import videoSrc from "../assets/amoeba_timelapse.mp4";

export const Home: React.FC = () => {
	return (
		<Box position="relative" width="100vw" minHeight="100vh" overflow="hidden">
			{/* Background Video */}
			<Box
				position="absolute"
				top="50%"
				// left="50%"
				// width="100vw"
				// height="100vh"
				objectFit="cover"
				transform="translate(-50%, -50%)"
				zIndex={-1}
			>
				<video
					width="100%"
					height="100%"
					
					muted
					loop
					autoPlay
				>
					<source src={videoSrc} type="video/mp4" />
				</video>
			</Box>

			{/* Foreground Content */}
			<Flex
				position="relative"
				zIndex={1}
				direction="column"
				align="center"
				justify="center"
				height="100vh"
				color="white"
				bg="rgba(0, 0, 0, 0.3)" // Optional dark overlay
			>
				<Text fontSize="4xl" fontWeight="bold">
					Welcome to My Website
				</Text>
			</Flex>
		</Box>
	);
};

export default Home;
