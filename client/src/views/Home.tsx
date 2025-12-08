import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Nav from "../components/Nav";
import lmpLogo from "../assets/uw-lab-medicine-pathology-inverted.svg";
import microLogo from "../assets/uw-dept-logo-department-of-microbiology/uw-dept-logo-department-of-microbiology-horizontal-inverted.svg";
import logo from "../assets/logo3x.png";
import { FadeInSection } from "../components/FadeInSection";
import HeaderCloud from "../components/HeaderCloud";

const researchProjects = [
	{
		title: "place_holder",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "place_holder",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "place_holder",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "place_holder",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "place_holder",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "place_holder",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
];

export const Home: React.FC = () => {
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowNav(true); // Show navbar after splash animation
		}, 4000); // match your logo splash duration
		return () => clearTimeout(timer);
	}, []);

	const [startCloud, setStartCloud] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setStartCloud(true), 4000); // wait for hero animation
		return () => clearTimeout(timer);
	}, []);

	return (
		<Box minHeight="100vh" overflow="hidden">
			{/* Navbar fades in */}
			{showNav && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ position: "fixed", width: "100%", zIndex: 10 }}
				>
					<Nav show={false} />
				</motion.div>
			)}

			<Flex
				direction="column"
				align="center"
				justify="center"
				minH="100vh"
				position="relative"
				px={[4, 8]}
			>
				{/* Logo splash */}
				<motion.div
					initial={{ opacity: 1, scale: 1 }}
					animate={{ opacity: 0, scale: 1.2 }}
					transition={{ duration: 4, ease: "easeInOut" }}
					style={{ position: "absolute" }}
				>
					<Image
						src={logo}
						w={["600px", "600px", "800px"]}
						objectFit="contain"
					/>
				</motion.div>

				{/* Text content fades in after logo */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 4, duration: 1, ease: "linear" }}
				>
					<HeaderCloud startAnimation={startCloud}></HeaderCloud>
					<Text fontSize="5xl" textAlign="center">
						Studying Eukaryotic Innate Immunity
					</Text>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 4, duration: 1, ease: "linear" }}
				>
					<Text
						textStyle={["xl", "2xl"]}
						textAlign="center"
						maxW="120ch"
						mt={4}
					>
						We utilize discovery-driven techniques to ask and answer questions
						about virus-host interactions across eukaryotes in order to
						understand the regulation of and expand our understanding of
						eukaryotic antiviral responses.
					</Text>
				</motion.div>
			</Flex>

			{/* SECTION 1 */}
			<FadeInSection>
				<Flex
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="var(--text)"
				>
					<Text fontSize="3xl" fontWeight="bold">
						Our Research
					</Text>
					<Text fontSize="2xl" maxW="120ch" px={6}>
						Viruses infect a wide range of organisms, from protists, algae, and
						fungi to plants and animals, relying on host cellular machinery for
						replication and spread. As hosts evolve defense pathways to restrict
						infection, viruses concurrently develop countermeasures that
						suppress or evade these defenses. This ongoing co-evolution drives a
						continual host–virus arms race. Our lab investigates the
						identification, regulation, evolution, and antagonism of antiviral
						systems across diverse eukaryotic lineages.
					</Text>
				</Flex>
			</FadeInSection>

			{/* SECTION 2 */}
			<FadeInSection>
				<Flex
					direction="column"
					align="center"
					justify="center"
					minHeight="150vh"
					color="var(--text)"
				>
					<Text fontSize="4xl" fontWeight="bold">
						Areas of Research
					</Text>
					<Flex
						mt={10}
						wrap="wrap"
						gap={6}
						justify="center"
						maxW="1200px"
						px={4}
					>
						{researchProjects.map((project) => (
							<motion.div
								key={project.title}
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
							>
								<Box
									w={["140px", "180px", "220px"]}
									h={["140px", "180px", "220px"]}
									borderRadius="lg"
									overflow="hidden"
									boxShadow="md"
									bg="var(--card-bg)"
									position="relative"
									cursor="pointer"
								>
									<Image
										src={project.image}
										alt={project.title}
										w="100%"
										h="100%"
										objectFit="cover"
									/>
									<Box
										position="absolute"
										bottom={0}
										w="100%"
										bg="rgba(0,0,0,0.55)"
										color="white"
										p={2}
										fontWeight="semibold"
										fontSize="sm"
										textAlign="center"
									>
										{project.title}
									</Box>
								</Box>
							</motion.div>
						))}
					</Flex>
				</Flex>
			</FadeInSection>

			{/* SECTION 3 */}
			<FadeInSection>
				<Flex
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="var(--text)"
				>
					<Text fontSize="4xl" fontWeight="bold">
						Affiliations
					</Text>
					<Flex direction="row" align="center" justify="center">
						<Link href="https://dlmp.uw.edu/" target="_blank">
							<Image src={lmpLogo} height="100px" />
						</Link>

						<Link
							href="https://microbiology.washington.edu/uw-microbiology-home"
							target="_blank"
						>
							<Image src={microLogo} height="60px" />
						</Link>
					</Flex>
				</Flex>
			</FadeInSection>
		</Box>
	);
};

export default Home;
