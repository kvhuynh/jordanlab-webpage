import {
	Box,
	Carousel,
	Flex,
	IconButton,
	Image,
	Separator,
	Text,
} from "@chakra-ui/react";
import { FadeInSection } from "../components/FadeInSection";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import amoebaVideo from "../assets/amoeba_timelapse.mp4";

export const Research: React.FC = () => {
	const { hash } = useLocation();

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
						{/* <Box maxW="800px" w="100%">
							<Box
								as="video"
								src={amoebaVideo}
								controls
								autoPlay={false}
								borderRadius="lg"
								boxShadow="lg"
								w="100%"
							/>
						</Box> */}
						<Text textStyle="5xl" marginBottom={6}>
							Our Research
						</Text>
						<Text px={{ base: 4, md: 8 }} textStyle="xl" maxW="120ch" mx="auto">
							We combine standard molecular biological techniques,
							high-throughput screening, field sampling, Next-generation
							sequencing (NGS), high-performance computing, and evolutionary
							analysis by correlation and coevolution to address our research
							interests. As the study of antiviral systems has important
							translational applications, and the discovery of several major
							antiviral systems has led to watersheds in either biotechnology or
							medicine, we are also interested in pursuing the translatable
							aspects of promising discoveries, although our major focus is on
							the basic biology that underlies these processes. Our research
							interest has been categorized into three domains:
						</Text>
					</Flex>
				</FadeInSection>
			</Box>
			{/* <Box position="relative" minHeight="100vh" overflow="hidden">
				<FadeInSection>
					<Flex
						position="relative"
						zIndex={1}
						direction="column"
						align="center"
						justify="center"
						minHeight="100vh"
						color="var(--text)"
					>
						<Text textStyle="5xl" marginBottom={6}>
							Our Goals
						</Text>

						<Text px={{ base: 4, md: 8 }} maxW="120ch" mx="auto">
							<List.Root alignSelf="center">
								<List.Item>
									Deepen our understanding of how mammalian antiviral responses
									are regulated
								</List.Item>
								<List.Item>
									Expand our understanding of the evolutionary solutions to
									viral infection
								</List.Item>
								<List.Item>
									Identify and understand any evolutionary conservation between
									viruses and hosts
								</List.Item>
							</List.Root>
						</Text>
					</Flex>
				</FadeInSection>
			</Box> */}

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
												{/* Image */}
												<Image
													id={`section-${i}`}
													src={section.image}
													maxH="400px"
													objectFit="contain"
												/>

												{/* Caption below image */}
												{section.caption && (
													<Text
														mt={2} // spacing between image and caption
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
		</Flex>
	);
};

export default Research;
