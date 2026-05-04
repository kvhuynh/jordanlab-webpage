// import {
// 	Box,
// 	Carousel,
// 	Dialog,
// 	Flex,
// 	IconButton,
// 	Image,
// 	Portal,
// 	Separator,
// 	Text,
// } from "@chakra-ui/react";
// import { FadeInSection } from "../components/FadeInSection";
// import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// // import amoebaVideo from "../assets/amoeba_timelapse.mp4";

// export const Research: React.FC = () => {
// 	const { hash } = useLocation();
// 	const [activeImage, setActiveImage] = useState<string | null>(null);

// 	useEffect(() => {
// 		if (hash) {
// 			const el = document.querySelector(hash);
// 			if (el) {
// 				setTimeout(() => {
// 					el.scrollIntoView({ behavior: "smooth" });
// 				}, 100); // allow page to finish layout
// 			}
// 		}
// 	}, [hash]);

// 	const sections = [
// 		[
// 			{
// 				title: "Regulation of the Antiviral State",
// 				text: `Interferons control the major antiviral program in humans and other vertebrates. Our lab focuses on how the interferon response is regulated and how this differs across tissue types. We are also interested in understanding broad antiviral states that are interferon-independent.`,
// 				image: "./images/figures/nudix_hydrolases.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 		],
// 		[
// 			{
// 				title: "Antiviral Defenses in Microbial Eukaryotes",
// 				text: `Despite having hundreds of known viruses, amoeba and other microbial eukaryotes lack essential nodes of antiviral defense present in prokaryotes and higher eukaryotes. Understanding how these organisms detect and survive viral infection promises fresh paradigms in antiviral defense.`,
// 				image: "./images/figures/av_def.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 			{
// 				title: "Antiviral Defenses in Microbial Eukaryotes",
// 				text: `Despite having hundreds of known viruses, amoeba and other microbial eukaryotes lack essential nodes of antiviral defense present in prokaryotes and higher eukaryotes. Understanding how these organisms detect and survive viral infection promises fresh paradigms in antiviral defense.`,
// 				image: "./images/figures/TCS_heatmap_website_white_bg.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 			{
// 				title: "Viral Evasion of Antiviral Immunity",
// 				text: `Using both viruses of humans and microbial eukaryotes, our lab focuses on the molecular strategies viruses use to undermine host immunity. Specifically, we are interest in how these strategies have evolved across viral lineages, their functionality against diverse antiviral systems, and their ability to reveal unknown mechanisms of host restriction.`,
// 				image: "./images/figures/bubble_chart.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 		],
// 		[
// 			{
// 				title: "Antiviral Defenses in Microbial Eukaryotes",
// 				text: `Despite having hundreds of known viruses, amoeba and other microbial eukaryotes lack essential nodes of antiviral defense present in prokaryotes and higher eukaryotes. Understanding how these organisms detect and survive viral infection promises fresh paradigms in antiviral defense.`,
// 				image: "./images/figures/av_def.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 			{
// 				title: "Antiviral Defenses in Microbial Eukaryotes",
// 				text: `Despite having hundreds of known viruses, amoeba and other microbial eukaryotes lack essential nodes of antiviral defense present in prokaryotes and higher eukaryotes. Understanding how these organisms detect and survive viral infection promises fresh paradigms in antiviral defense.`,
// 				image: "./images/figures/TCS_heatmap_website_white_bg.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 			{
// 				title: "Viral Evasion of Antiviral Immunity",
// 				text: `Using both viruses of humans and microbial eukaryotes, our lab focuses on the molecular strategies viruses use to undermine host immunity. Specifically, we are interest in how these strategies have evolved across viral lineages, their functionality against diverse antiviral systems, and their ability to reveal unknown mechanisms of host restriction.`,
// 				image: "./images/figures/bubble_chart.png",
// 				caption:
// 					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
// 			},
// 		],
// 	];

// 	return (
// 		<Flex flexDirection="column" paddingTop={75}>
// 			<Text textStyle="6xl" alignSelf="flex-start" mb={6}>
// 				Research
// 			</Text>
// 			<Separator size="lg" />

// 			<Box position="relative" minHeight="100vh" overflow="hidden">
// 				<FadeInSection>
// 					<Flex
// 						position="relative"
// 						zIndex={1}
// 						direction="column"
// 						align="center"
// 						justify="center"
// 						minHeight="75vh"
// 						color="var(--text)"
// 					>
// 						<Flex gap={6} mb={6}>
// 							<video
// 								style={{ width: "45%" }}
// 								controls
// 								muted
// 								autoPlay
// 								loop
// 								playsInline
// 							>
// 								<source
// 									src="./images/figures/amoeba_timelapse.mp4"
// 									type="video/mp4"
// 								/>
// 							</video>
// 							<video
// 								style={{ width: "45%" }}
// 								controls
// 								muted
// 								autoPlay
// 								loop
// 								playsInline
// 							>
// 								<source
// 									src="./images/figures/amoeba_timelapse.mp4"
// 									type="video/mp4"
// 								/>
// 							</video>
// 						</Flex>
// 						<Text textStyle="5xl" marginBottom={6}>
// 							Our Research
// 						</Text>
// 						<Text px={{ base: 4, md: 8 }} textStyle="xl" maxW="120ch" mx="auto">
// 							Systems to detect and defend against viral invaders are critical
// 							to an organism’s health and can provide powerful molecular tools
// 							for biotechnology and medicine. Our goal is to understand how
// 							these systems function across diverse eukaryotes and how they can
// 							be exploited for human benefit.
// 						</Text>
// 					</Flex>
// 				</FadeInSection>
// 			</Box>

// 			{sections.map((section, i) => (
// 				<Box key={i} position="relative" minHeight="100vh" overflow="hidden">
// 					<FadeInSection>
// 						<Flex
// 							position="relative"
// 							zIndex={1}
// 							direction="column"
// 							align="center"
// 							justify="center"
// 							minHeight="125vh"
// 							color="var(--text)"
// 						>
// 							<Carousel.Root
// 								slideCount={sections.length}
// 								width="100%"
// 								maxW="600px"
// 								mx="auto"
// 								autoplay={true}
// 								loop
// 							>
// 								<Carousel.ItemGroup>
// 									{sections[i].map((section, i) => (
// 										<Carousel.Item key={i} index={i}>
// 											<Flex
// 												direction="column"
// 												align="center"
// 												justify="center"
// 												w="100%"
// 											>
// 												<Image
// 													id={`section-${i}`}
// 													src={section.image}
// 													maxH="400px"
// 													objectFit="contain"
// 													cursor="pointer"
// 													onClick={() => setActiveImage(section.image)}
// 												/>

// 												{section.caption && (
// 													<Text
// 														mt={2}
// 														fontSize="sm"
// 														color="var(--text)"
// 														textAlign="center"
// 														maxW="100%"
// 													>
// 														{section.caption}
// 													</Text>
// 												)}
// 											</Flex>
// 										</Carousel.Item>
// 									))}
// 								</Carousel.ItemGroup>

// 								<Carousel.Control justifyContent="center" gap="4">
// 									<Carousel.PrevTrigger asChild>
// 										<IconButton size="xs" variant="ghost">
// 											<LuChevronLeft />
// 										</IconButton>
// 									</Carousel.PrevTrigger>

// 									<Carousel.Indicators />

// 									<Carousel.NextTrigger asChild>
// 										<IconButton size="xs" variant="ghost">
// 											<LuChevronRight />
// 										</IconButton>
// 									</Carousel.NextTrigger>
// 								</Carousel.Control>
// 							</Carousel.Root>

// 							<Text textStyle={["4xl", "5xl"]} marginBottom={6}>
// 								{section[i].title}
// 							</Text>

// 							<Text
// 								px={{ base: 4, md: 8 }}
// 								textStyle={["sm", "xl"]}
// 								maxW="120ch"
// 								mx="auto"
// 							>
// 								{section[i].text}
// 							</Text>
// 						</Flex>
// 					</FadeInSection>
// 				</Box>
// 			))}

// 			{/* Overlay */}
// 			<Dialog.Root
// 				open={!!activeImage}
// 				onOpenChange={(open) => {
// 					if (!open) setActiveImage(null);
// 				}}
// 				size="full"
// 			>
// 				<Portal>
// 					<Dialog.Positioner>
// 						{/* Fullscreen wrapper */}
// 						<Box
// 							position="fixed"
// 							inset={0}
// 							bg="blackAlpha.800"
// 							display="flex"
// 							alignItems="center"
// 							justifyContent="center"
// 							onClick={() => setActiveImage(null)} // click outside closes
// 							zIndex={9999}
// 						>
// 							{/* Inner Box stops propagation */}
// 							<Box position="relative" onClick={(e) => e.stopPropagation()}>
// 								{/* Close button */}
// 								<IconButton
// 									aria-label="Close"
// 									size="sm"
// 									variant="ghost"
// 									color="white"
// 									position="absolute"
// 									top={2}
// 									right={2}
// 									zIndex={2}
// 									onClick={() => setActiveImage(null)}
// 								>
// 									<LuX />
// 								</IconButton>

// 								{/* Image */}
// 								<Image
// 									src={activeImage ?? ""}
// 									maxH="90vh"
// 									maxW="90vw"
// 									objectFit="contain"
// 									borderRadius="lg"
// 								/>
// 							</Box>
// 						</Box>
// 					</Dialog.Positioner>
// 				</Portal>
// 			</Dialog.Root>
// 		</Flex>
// 	);
// };

// export default Research;

import {
	Box,
	Carousel,
	Dialog,
	Flex,
	IconButton,
	Image,
	Portal,
	Separator,
	Text,
} from "@chakra-ui/react";
import { FadeInSection } from "../components/FadeInSection";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import amoebaVideo from "../assets/amoeba_timelapse.mp4";

export const Research: React.FC = () => {
	const { hash } = useLocation();
	const [activeImage, setActiveImage] = useState<string | null>(null);

	useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth" });
				}, 100); // allow page to finish layout
			}
		}
	}, [hash]);

	const researchSections = [
		{
			title: "Regulation of the Antiviral State",
			text: "Interferons control the major antiviral program in humans and other vertebrates. Our lab focuses on how the interferon response is regulated and how this differs across tissue types. We are also interested in understanding broad antiviral states that are interferon-independent.",
			slides: [
				// {
				// 	image: "./images/figures/nudix_hydrolases.png",
				// 	caption: "Representative domain architecture analysis.",
				// },
			],
		},
		{
			title: "Antiviral Defenses in Microbial Eukaryotes",
			text: "Despite having hundreds of known viruses, amoeba and other microbial eukaryotes lack essential nodes of antiviral defense present in prokaryotes and higher eukaryotes. Understanding how these organisms detect and survive viral infection promises fresh paradigms in antiviral defense.",
			slides: [
				{
					image: "./images/figures/av_def.png",
					caption: "Comparative antiviral defense pathways.",
				},
				{
					image: "./images/figures/TCS_heatmap_website_white_bg.png",
					caption: "Phylogenetic distribution heatmap.",
				},
				{
					image: "./images/figures/bubble_chart.png",
					caption: "Enrichment analysis across taxa.",
				},
			],
		},
		{
			title: "Viral Evasion of Antiviral Immunity",
			text: "Using both viruses of humans and microbial eukaryotes, our lab focuses on the molecular strategies viruses use to undermine host immunity. We study how these strategies evolved across viral lineages and how they reveal unknown mechanisms of host restriction.",
			slides: [
				// {
				// 	image: "./images/figures/bubble_chart.png",
				// 	caption: "Cross-species evolutionary signatures.",
				// },
			],
		},
	];

	return (
		<Flex flexDirection="column" paddingTop={75}>
			<Text textStyle="6xl" alignSelf="flex-start" mb={6}>
				Research
			</Text>
			<Separator size="lg" />

			<Box position="relative" minHeight="100vh" overflow="hidden">
				<FadeInSection>
					<Flex
						position="relative"
						zIndex={1}
						direction="column"
						align="center"
						justify="center"
						minHeight="75vh"
						color="var(--text)"
					>
						<Flex gap={6} mb={6}>
							<video
								style={{ width: "45%" }}
								controls
								muted
								autoPlay
								loop
								playsInline
							>
								<source
									src="./images/figures/amoeba_timelapse.mp4"
									type="video/mp4"
								/>
							</video>
							<video
								style={{ width: "45%" }}
								controls
								muted
								autoPlay
								loop
								playsInline
							>
								<source
									src="./images/figures/amoeba_timelapse.mp4"
									type="video/mp4"
								/>
							</video>
						</Flex>
						<Text textStyle="5xl" marginBottom={6}>
							Our Research
						</Text>
						<Text px={{ base: 4, md: 8 }} textStyle="xl" maxW="120ch" mx="auto">
							Systems to detect and defend against viral invaders are critical
							to an organism’s health and can provide powerful molecular tools
							for biotechnology and medicine. Our goal is to understand how
							these systems function across diverse eukaryotes and how they can
							be exploited for human benefit.
						</Text>
					</Flex>
				</FadeInSection>
			</Box>

			{researchSections.map((section, i) => (
	<Box key={i} position="relative" minHeight="100vh" overflow="hidden">
		<FadeInSection>
			<Flex
				position="relative"
				zIndex={1}
				direction="column"
				align="center"
				justify="center"
				minHeight="125vh"
				color="var(--text)"
			>
				<Carousel.Root
					slideCount={section.slides.length}
					width="100%"
					maxW="600px"
					mx="auto"
					autoplay={true}
					loop
				>
					<Carousel.ItemGroup>
						{section.slides.map((slide, slideIndex) => (
							<Carousel.Item key={slideIndex} index={slideIndex}>
								<Flex
									direction="column"
									align="center"
									justify="center"
									w="100%"
								>
									<Image
										id={`researchSections-${i}-${slideIndex}`}
										src={slide.image}
										maxH="400px"
										objectFit="contain"
										cursor="pointer"
										onClick={() => setActiveImage(slide.image)}
									/>

									{slide.caption && (
										<Text
											mt={2}
											fontSize="sm"
											color="var(--text)"
											textAlign="center"
											maxW="100%"
										>
											{slide.caption}
										</Text>
									)}
								</Flex>
							</Carousel.Item>
						))}
					</Carousel.ItemGroup>

					<Carousel.Control justifyContent="center" gap="4">
						<Carousel.PrevTrigger asChild>
							<IconButton size="xs" variant="ghost">
								<LuChevronLeft />
							</IconButton>
						</Carousel.PrevTrigger>

						<Carousel.Indicators />

						<Carousel.NextTrigger asChild>
							<IconButton size="xs" variant="ghost">
								<LuChevronRight />
							</IconButton>
						</Carousel.NextTrigger>
					</Carousel.Control>
				</Carousel.Root>

				<Text textStyle={["4xl", "5xl"]} marginBottom={6}>
					{section.title}
				</Text>

				<Text
					px={{ base: 4, md: 8 }}
					textStyle={["sm", "xl"]}
					maxW="120ch"
					mx="auto"
				>
					{section.text}
				</Text>
			</Flex>
		</FadeInSection>
	</Box>
))}

			{/* Overlay */}
			<Dialog.Root
				open={!!activeImage}
				onOpenChange={(open) => {
					if (!open) setActiveImage(null);
				}}
				size="full"
			>
				<Portal>
					<Dialog.Positioner>
						{/* Fullscreen wrapper */}
						<Box
							position="fixed"
							inset={0}
							bg="blackAlpha.800"
							display="flex"
							alignItems="center"
							justifyContent="center"
							onClick={() => setActiveImage(null)} // click outside closes
							zIndex={9999}
						>
							{/* Inner Box stops propagation */}
							<Box position="relative" onClick={(e) => e.stopPropagation()}>
								{/* Close button */}
								<IconButton
									aria-label="Close"
									size="sm"
									variant="ghost"
									color="white"
									position="absolute"
									top={2}
									right={2}
									zIndex={2}
									onClick={() => setActiveImage(null)}
								>
									<LuX />
								</IconButton>

								{/* Image */}
								<Image
									src={activeImage ?? ""}
									maxH="90vh"
									maxW="90vw"
									objectFit="contain"
									borderRadius="lg"
								/>
							</Box>
						</Box>
					</Dialog.Positioner>
				</Portal>
			</Dialog.Root>
		</Flex>
	);
};

export default Research;
