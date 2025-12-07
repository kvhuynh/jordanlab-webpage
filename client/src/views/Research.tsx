import { Box, Flex, List, Text } from "@chakra-ui/react";
import { FadeInSection } from "../components/FadeInSection";

export const Research: React.FC = () => {
	const sections = [
		{
			title: "Transcriptional Regulation of the Antiviral Interferon Response",
			text: `Our research focuses on understanding how the antiviral interferon
      response is kept off. Research over the last decade has clearly
      shown that the cell generates all the inflammatory molecules that
      activate the nucleic acid sensors, which activate the interferon
      system. Unregulated, this leads to pathological innate immune
      activation, which can present as autoimmune and neuro-developmental
      disorders. Thus, cells elaborate a sophisticated regulatory network
      to limit the production of these intermediates, metabolize those
      that are made, and physically locate the sensors away from the major
      sites of inflammatory intermediate production. We have a specific
      focus on understanding how the cell limits the production of
      inflammatory RNAs generated during transcription.`,
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
		},
	];

	return (
		<Flex flexDirection="column" paddingTop={75}>
			<Text textStyle="6xl" alignSelf="flex-start" marginBottom="30px">
				Research
			</Text>
			<Box position="relative" minHeight="100vh" overflow="hidden">
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
							<Text textStyle="5xl" marginBottom={6}>
								{section.title}
							</Text>

							<Text px={{ base: 4, md: 8 }} textStyle="xl" maxW="120ch" mx="auto">
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
