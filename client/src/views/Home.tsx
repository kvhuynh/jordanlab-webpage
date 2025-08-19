import { Box, Flex, Text } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import videoSrc from "../assets/amoeba_timelapse.mp4";

export const Home: React.FC = () => {
	return (
		<Box position="relative" width="100vw" minHeight="100vh" overflow="hidden">
			<Parallax speed={-20}>
				<Flex
					position="relative"
					zIndex={1}
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="white"
					bg="rgba(0, 0, 0, 0.3)"
				>
					<Text fontSize="4xl" fontWeight="bold">
						jordan lab
					</Text>
				</Flex>
			</Parallax>

			<Parallax speed={-20}>
				<Flex
					position="relative"
					zIndex={1}
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="white"
					bg="rgba(0, 0, 0, 0.3)"
				>
					<Text fontSize="4xl" fontWeight="bold">
						Areas of Research
					</Text>
				</Flex>
			</Parallax>

			{/* Foreground Content */}
			{/* <Flex
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
					jordan lab
				</Text>
			</Flex> */}
		</Box>
	);
};

export default Home;
