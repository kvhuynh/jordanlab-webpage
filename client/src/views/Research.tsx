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

	const sections = [
		{
			token: "1",
			title: "Transcriptional regulation of the antiviral state",
			text: `Interferons and the genes they regulate constitute the major antiviral program in humans and other
		vertebrates. Our lab focuses on the mechanism(s) by which transcription factors control the
		interferon response – keeping the response off at baseline, modulating the magnitude of an
		activated response, and cessation of the interferon response – and how this differs across tissue
		types. We are also interested in understanding how distinct families of transcription factors
		contribute to broad antiviral states that are independent of the interferons.`,
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			caption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
		},
		{
			title: "Antiviral defense in microbial eukaryotes",
			text: `Microbial eukaryotes are essential parts of the nutrient cycle in both marine and soil environments.
		These eukaryotes are host to multiple clades of giant viruses (viruses whose genomes range from
		~300kb to 2.5Mb) whose evolutionary origins remain a mystery. Despite the ecological
		importance of these hosts and the prevalence of their viruses, little is known about how these hosts
		defend themselves against viral pathogens. Homology analyses by our lab and others have been
		unable to detect many modules of innate immunity conserved in prokaryotes and higher eukaryotes
		in these eukaryotes. This suggests significant potential for brand new paradigms of viral detection
		and defense.`,
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			caption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
		},
		{
			title: "Viral evasion of antiviral innate immunity",
			text: `To successfully replicate their genomes and spread their progeny viruses must evade detection and
		subvert the activation of host antiviral programs. Using both viruses of humans and microbial
		eukaryotes, our lab focuses on the molecular strategies these viruses to undermine host immunity.
		How these strategies have evolved across viral lineages, their functionality against diverse antiviral
		systems, and their ability to reveal unknown mechanisms of host restriction are our major areas of
		research.`,
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			caption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste ad unde nobis quia ab, repellendus porro ipsa. Hic, alias fugiat beatae corporis eaque qui consequuntur tempora assumenda nemo dignissimos?",
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
						<Text textStyle="5xl" marginBottom={6}>
							Our Research
						</Text>
						<Text px={{ base: 4, md: 8 }} textStyle="xl" maxW="120ch" mx="auto">
							Systems to detect and defend against viral invaders are critical
							to an organism’s health and can provide power molecular tools for
							biotechnology and medicine. Our goal is to understand how these
							systems function across diverse eukaryotes. This basic knowledge
							will inform the evolution of antiviral strategies across the
							Eukarya and has the potential to provide the raw material for new
							biotechnologies and medical interventions.
						</Text>
					</Flex>
				</FadeInSection>
			</Box>

			{sections.map((section, i) => (
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
								slideCount={sections.length}
								width="100%"
								maxW="600px"
								mx="auto"
								autoplay={true}
								loop
							>
								<Carousel.ItemGroup>
									{sections.map((section, i) => (
										<Carousel.Item key={i} index={i}>
											<Flex
												direction="column"
												align="center"
												justify="center"
												w="100%"
											>
												<Image
													id={`section-${i}`}
													src={section.image}
													maxH="400px"
													objectFit="contain"
													cursor="pointer"
													onClick={() => setActiveImage(section.image)}
												/>

												{section.caption && (
													<Text
														mt={2}
														fontSize="sm"
														color="var(--text)"
														textAlign="center"
														maxW="100%"
													>
														{section.caption}
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
