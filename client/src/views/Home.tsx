import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import videoSrc from "../assets/amoeba_timelapse.mp4";
import lmpLogo from "../assets/uw-lab-medicine-pathology-inverted.svg";
import microLogo from "../assets/uw-dept-logo-department-of-microbiology/uw-dept-logo-department-of-microbiology-horizontal-inverted.svg";

export const Home: React.FC = () => {
	return (
		<Box minHeight="100vh" overflow="hidden">
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
						jordan lab - something here
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
						mission blurb
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
						research highlights
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
						areas of research
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
						sponsors and affiliations
					</Text>
					<Flex direction="row" align="center" justifyContent={"center"}>
						<Link href="https://dlmp.uw.edu/" target="_blank">
							<Image src={lmpLogo} height="100px"></Image>
						</Link>
						<Link
							href="https://microbiology.washington.edu/uw-microbiology-home"
							target="_blank"
						>
							<Image src={microLogo} height="60px"></Image>
						</Link>
					</Flex>
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
