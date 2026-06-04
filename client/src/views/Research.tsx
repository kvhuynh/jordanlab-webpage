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
				{
					image: "./images/figures/IFN_figure_website.png",
					// caption: "Representative domain architecture analysis.",
				},
			],
		},
		{
			title: "Antiviral Defenses in Microbial Eukaryotes",
			text: "Despite having hundreds of known viruses, amoeba and other microbial eukaryotes lack essential nodes of antiviral defense present in prokaryotes and higher eukaryotes. Understanding how these organisms detect and survive viral infection promises fresh paradigms in antiviral defense.",
			slides: [
				{
					image: "./images/figures/TCS_heatmap_website_white_bg.png",
					// caption: "Phylogenetic distribution heatmap.",
				},
				{
					image: "./images/figures/av_def.png",
					// caption: "Comparative antiviral defense pathways.",
				},
				// {
				// 	// image: "./images/figures/bubble_chart.png",
				// 	// caption: "Enrichment analysis across taxa.",
				// },
			],
		},
		{
			title: "Viral Evasion of Antiviral Immunity",
			text: "Using both viruses of humans and microbial eukaryotes, our lab focuses on the molecular strategies viruses use to undermine host immunity. We study how these strategies evolved across viral lineages and how they reveal unknown mechanisms of host restriction.",
			slides: [
				{
					image: "./images/figures/nudix_hydrolases.png",
					// caption: "Cross-species evolutionary signatures.",
				},
				{
					image: "./images/figures/structural_homologs.png"
				}
			],
		},
		{
			title: "Environmental Isolation of Acanthamoeba and their Giant Viruses",
			text: "Microbial eukaryotes and their viruses are abundant in the environment. To aid in our antiviral discovery efforts, the Jordan lab maintains an active environmental sampling pipeline to isolate novel strains of Acanthamoeba and their giant viruses.",
			slides: [
				{
					image: "./images/figures/sampling_pipeline.png",
					// caption: "Cross-species evolutionary signatures.",
				},
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
						<Flex gap={6} mb={6}>
							{/* <video
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
							</video> */}
							{/* <video
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
							</video> */}
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
				<Box key={i} id={`section-${i}`} position="relative" minHeight="100vh" overflow="hidden">
					{/* Keep the layout containers static and un-animated */}
					<Flex
						position="relative"
						zIndex={1}
						direction="column"
						align="center"
						justify="center"
						minHeight="75vh"
						color="var(--text)"
					>
						<FadeInSection>
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
													decoding="async"
													htmlWidth="100%" // Giving the browser explicit constraints prevents layout shifts
												/>

												{/* {slide.caption && (
													<Text
														mt={2}
														fontSize="sm"
														color="var(--text)"
														textAlign="center"
														maxW="100%"
													>
														{slide.caption}
													</Text>
												)} */}
											</Flex>
										</Carousel.Item>
									))}
								</Carousel.ItemGroup>
								{section.slides.length != 1 ? (
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
								) : null}
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
						</FadeInSection>
					</Flex>
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


