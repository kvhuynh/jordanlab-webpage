import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";

import lmpLogo from "../assets/uw-lab-medicine-pathology-inverted.svg";
import microLogo from "../assets/uw-dept-logo-department-of-microbiology/uw-dept-logo-department-of-microbiology-horizontal-inverted.svg";
import HeaderCloud from "../components/HeaderCloud";

export const Home: React.FC = () => {
	const { scrollY } = useScroll();
	const aboutOpacity = useTransform(scrollY, [200, 600], [0, 1]);

	return (
		<Box minHeight="100vh" overflow="hidden">
			<Flex
				position="relative"
				zIndex={1}
				direction="column"
				align="center"
				justify="center"
				minHeight="100vh"
				color="var(--text)"
			>
				<Box position="relative" display="inline-block">
					<HeaderCloud />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
					>
						<Text fontSize="6xl" fontWeight="bold">
							Studying Eukaryotic Defenses
						</Text>

						{/* Subtitle */}
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 3, duration: 2, ease: "easeOut" }}
						>
							<Text textStyle="5xl" fontWeight="bold">
								with The Jordan Lab
							</Text>
						</motion.div>
					</motion.div>
				</Box>
			</Flex>
			<motion.div
				style={{
					opacity: aboutOpacity,
				}}
			>
				<Parallax speed={-20}>
					<Flex
						position="relative"
						zIndex={1}
						direction="column"
						align="center"
						justify="center"
						minHeight="100vh"
						color="var(--text)"
					>
						<Text fontSize="3xl" fontWeight="bold">
							Our Research <br />
						</Text>
						<Text fontSize="2xl">
							We utilizes discovery-driven techniques to ask and answer
							questions about virus-host interactions across eukaryotes in order
							to understand the regulation of and expand our understanding of
							eukaryotic antiviral responses. <br /> <br />
							Viruses infect a wide range of organisms, from protists, algae,
							and fungi to plants and animals, relying on host cellular
							machinery for replication and spread. As hosts evolve defense
							pathways to restrict infection, viruses concurrently develop
							countermeasures that suppress or evade these defenses. This
							ongoing co-evolution drives a continual host–virus arms race. Our
							lab investigates the identification, regulation, evolution, and
							antagonism of antiviral systems across diverse eukaryotic
							lineages.
						</Text>
					</Flex>
				</Parallax>
			</motion.div>
			<Parallax speed={-20}>
				<Flex
					position="relative"
					zIndex={1}
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="var(--text)"
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
					color="var(--text)"
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
		</Box>
	);
};

export default Home;
