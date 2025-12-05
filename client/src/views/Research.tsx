import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
			{/* <Flex
				position="relative"
				zIndex={1}
				direction="column"
				align="center"
				justify="center"
				minHeight="50vh"
				color="white"
				// bg="rgba(0, 0, 0, 0.3)"
			>
				<Text textStyle={"5xl"}>Goals</Text>
				<Box textStyle={"xl"}>
					<List.Root>
						<List.Item>
							Deepen our understanding of how mammalian antiviral responses are
							regulated
						</List.Item>
						<List.Item>
							Expand our understanding of the evolutionary solutions to viral
							infection
						</List.Item>
						<List.Item>
							Identify and understand any evolutionary conservation between the
							two
						</List.Item>
						<List.Item>
							understand how viruses counter these processes.
						</List.Item>
					</List.Root>
				</Box>
			</Flex> */}
			{/* <CloudedSection> */}

			{sections.map((section, i) => {
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const ref = useRef<HTMLDivElement>(null);
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const inView = useInView(ref, { amount: 0.5 }); // triggers when 50% visible

				return (
					<Box position="relative" minHeight="100vh" overflow="hidden">
						{/* <BacteriaCloud></BacteriaCloud> */}

						<motion.div
							key={i}
							ref={ref}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
							transition={{ duration: 0.8 }}

						>
							<Flex
								position="relative"
								zIndex={1}
								direction="column"
								align="center"
								justify="center"
								minHeight="100vh"
								color="white"
							>
								<Text textStyle="5xl" marginBottom={6} >
									{section.title}
								</Text>
								<Text px={{ base: 4, md: 8 }} maxW="120ch" mx="auto">{section.text}</Text>
							</Flex>
						</motion.div>
					</Box>
				);
			})}
			{/* </CloudedSection> */}
		</Flex>
	);
};

export default Research;
