import { Box, Flex, Text, Link, Image, Separator } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Nav from "../components/Nav";
import { getMaps } from "../services/services.maps";

import dlmpLight from "../assets/dlmp-light.png";
import dlmpDark from "../assets/dlmp-dark.svg";
import microLight from "../assets/micro-light.png";
import microDark from "../assets/micro-dark.png";
import logo from "../assets/logo3x.png";
import { FadeInSection } from "../components/FadeInSection";
import HeaderCloud from "../components/HeaderCloud";

const researchProjects = [
	{
		token: "1",
		title: "Transcriptional regulation of the antiviral state",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "Antiviral defense in microbial eukaryotes",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
	{
		title: "Viral evasion of antiviral innate immunity",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
	},
];

export const Home: React.FC = () => {
	const [showNav, setShowNav] = useState(false);
	const [embedUrl, setEmbedUrl] = useState("");

	useEffect(() => {
		getMaps().then((res) => {
			setEmbedUrl(res.embedUrl);
		});
	});

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
					initial={{ opacity: 0, y: -150 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 4, duration: 1.2, ease: "easeInOut" }}
					style={{ position: "absolute" }}
				>
					<Image
						src={logo}
						w={["600px", "600px", "800px"]}
						objectFit="contain"
					/>
				</motion.div>
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
					<Text
						textStyle={["3xl", "5xl"]}
						textAlign="center"
						maxW="120ch"
						mt={4}
					>
						Exploring Eukaryotic Innate Immunity
					</Text>
					<Text
						textStyle={["xl", "2xl"]}
						textAlign="center"
						maxW="120ch"
						mt={4}
					>
						We utilize discovery-driven techniques to study virus-host
						interactions across eukaryotes to expand our understanding on how
						cells detect and respond to infections.
					</Text>
					<HeaderCloud startAnimation={startCloud}></HeaderCloud>
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
					<Text textStyle={"3xl"} fontWeight="bold">
						The Host-Virus Arms Race
					</Text>
					<Text textStyle={["xl", "2xl"]} maxW="120ch" px={6}>
						Viruses are known to parasitize all walks of life, exploiting the
						host machinery for replication and propagation. While the host
						evolves defense mechanisms to resist such infection, viruses
						counter- evolve various strategies to negate the host’s defense
						system. Such co-evolution leads to a perpetual host-virus arms race
						where each organism must innovate constantly to stay alive. Our lab
						focuses on the identification, regulation, evolution and antagonism
						of the antiviral systems in diverse eukaryotes.
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
						{researchProjects.map((project, i) => (
							<motion.div
								key={project.title}
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
							>
								<Link href={`/research#section-${i}`}>
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
								</Link>
							</motion.div>
						))}
					</Flex>
				</Flex>
			</FadeInSection>

			{/* SECTION 3 */}
			<FadeInSection>
				<Flex
					direction={{ base: "column", lg: "row" }}
					align="center"
					justify="center"
					minH="100vh"
					gap={{ base: 10, lg: 16 }}
					color="var(--text)"
				>
					{/* Affiliations */}
					<Flex direction="column" align="center">
						<Text fontSize="4xl" fontWeight="bold" mb={6}>
							Affiliations
						</Text>

						<Flex
							direction="row"
							align="center"
							justify="center"
							gap={[6, 8, 12]}
							flexWrap="wrap"
						>
							<Link href="https://dlmp.uw.edu/" target="_blank">
								<Box
									w={["200px", "280px", "360px"]}
									h={["100px", "140px", "180px"]}
									position="relative"
								>
									<img
										src={dlmpLight}
										className="logo light-logo"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "contain",
										}}
									/>
									<img
										src={dlmpDark}
										className="logo dark-logo"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "contain",
											position: "absolute",
											inset: 0,
										}}
									/>
								</Box>
							</Link>

							<Link
								href="https://microbiology.washington.edu/uw-microbiology-home"
								target="_blank"
							>
								<Box
									w={["200px", "280px", "360px"]}
									h={["100px", "140px", "180px"]}
									position="relative"
								>
									<img
										src={microLight}
										className="logo light-logo"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "contain",
										}}
									/>
									<img
										src={microDark}
										className="logo dark-logo"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "contain",
											position: "absolute",
											inset: 0,
										}}
									/>
								</Box>
							</Link>
						</Flex>
					</Flex>

					{/* Divider */}
					<Separator
						orientation="vertical"
						height="300px"
						display={{ base: "none", lg: "block" }}
					/>

					{/* Find Us */}
					<Flex direction="column" align="center">
						<Text fontSize="4xl" fontWeight="bold" mb={6}>
							Find us
						</Text>

						<Box width={{ base: "100%", md: "600px" }}>
							<iframe
								width="100%"
								height="450"
								loading="lazy"
								allowFullScreen
								referrerPolicy="no-referrer-when-downgrade"
								src={embedUrl}
							/>
						</Box>
					</Flex>
				</Flex>
			</FadeInSection>
		</Box>
	);
};

export default Home;
