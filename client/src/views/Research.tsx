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
			title: "Basal regulation of antiviral systems",
			text: `Chronic activation of antiviral systems often come at a significant fitness cost to the host and so
		must be tightly regulated to mitigate this. In vertebrates, the major antiviral system is controlled by
		the Type I and III families of Interferon cytokines; the chronic activation of which is associated
		with autoimmune and neuro-developmental disorders. With a focus on processes that controlled
		the production of dsRNA molecules that could activate the IFN system, we developed an arrayed
		CRISPR/Cas9 library targeting ~1600 human genes, which identified 20 genes whose absence led
		to the robust activation of the IFN response. How these proteins limit activation of the IFN
		response is an active area of research in the lab. Additionally, several of these are deeply conserved
		across Eukarya, begging the question whether the capacity to limit aberrant activation of antiviral
		systems is an ancient function of these proteins or if this function is a specific innovation of IFN-
		containing lineages.`,
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
		},
		{
			title: "Amoebal Antiviral Responses and Giant Virus Countermeasures",
			text: `Despite comprehensive insights into viral detection and defense
      mechanisms in higher eukaryotes, our understanding of how lower
      eukaryotes, including protists, mount their defenses remains
      minimal. Lineages of these eukaryotes (specifically algae and
      amoebae) are known to be the melting pot for chimeric microorganisms
      belonging to the class Megaviricetes, commonly known as giant
      viruses, whose genomes range from 350kb to 2.5 Mb. Since these
      unicellular eukaryotes are devoid of any known anti-viral system
      (Restriction Endonucleases, CRISPR/Cas systems, and RNA
      interference) or any such homologs related to higher multicellular
      eukaryotes, there is a high probability of finding novel strategies
      and different mechanisms to counter virus infection. That could be a
      revolutionary step in the field of molecular biology, biotechnology,
      and therapeutics. Moreover, these viruses remain enigmatic, and by
      studying them in response to their hosts, we will learn incredible
      new basic virology.`,
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
		},
		{
			title: "Environmental Sampling and Discovery of Novel Giant Viruses",
			text: `The discovery of Mimivirus (in 2003) has fueled debate about the
      significance of viruses in the tree of life and their role in
      eukaryogenesis. Since then, there have been tremendous discoveries
      of such giant viruses that now belong to the phylum Nuclecytoviricota,
      sharing the clades with the well-known Pox-, Irido-, and Asfar–viridae.
      Although we managed to share some of these viruses from the established lab,
      the lack of a common repository makes most of them quite inaccessible
      to budding labs, which drives us to start exploring the environmental
      samples to find some typical or novel giant viruses. We have developed
      an in-house pipeline to isolate, characterize, and utilize these viruses
      for our anti-viral research goals.`,
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
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
				<Box
					// id={`section-${i}`}
					key={i}
					position="relative"
					minHeight="100vh"
					overflow="hidden"
				>
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
							>
								<Carousel.ItemGroup>
									{sections.map((section, i) => (
										<Carousel.Item key={i} index={i}>
											<Flex w="100%" justify="center" align="center">
												<Image
													id={`section-${i}`}
													src={section.image}
													maxH="400px"
													objectFit="contain"
												/>
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
