import {
	Box,
	Flex,
	Spacer,
	Link,
	Button,
	Card,
	Stack,
	Image,
	Text,
	Separator,
} from "@chakra-ui/react";

type Author = {
	ORCID?: string;
	"authenticated-orcid"?: string;
	given: string;
	family: string;
	sequence?: string;
	affiliation?: string;
};

type Publication = {
	title: string | null;
	year: string | null;
	month: string | null;
	day: string | null;
	sortKey: string;
	doi: string | null;
	url: string | null;
	authors: Author[] | null;
};

import { LuExternalLink } from "react-icons/lu";

import { useState, useEffect } from "react";

import { getPublications } from "../services/services.publications";

export const Publications: React.FC = () => {
	const [publications, setPublications] = useState<Publication[]>([]);

	useEffect(() => {
		getPublications("0000-0002-0602-2871").then((data: Publication[]) => {
			setPublications(data);
			console.log(data);
		});
	}, []);

	// ✅ Compute grouped publications HERE
	const grouped = publications.reduce(
		(acc: Record<string, Publication[]>, pub) => {
			const year = pub.year ?? "Unknown";

			if (!acc[year]) acc[year] = [];
			acc[year].push(pub);

			return acc;
		},
		{}
	);
	const AUTHOR_LIMIT = 100;

	return (
		<Flex flexDirection={"column"} paddingTop={75}>
			<Text textStyle={"6xl"} alignSelf={"flex-start"} marginBottom={"30px"}>
				Publications
			</Text>

			<Box>
				{Object.keys(grouped)
					.sort((a, b) => Number(b) - Number(a))
					.map((year) => (
						<Box key={year} mt={10}>
							<Box mt={10} maxW="800px" mx="auto">
								{/* Year header */}
								<Flex py={2} px={0}>
									{" "}
									{/* remove horizontal padding */}
									<Text textStyle="6xl" textAlign="left">
										{year}
									</Text>
								</Flex>

								{/* Publications */}
								{grouped[year].map((pub, idx) => (
									<Box key={idx} mb={4}>
										<Text textStyle="xl" textAlign="left" mb={1}>
											{pub.title ?? "No title"}
										</Text>

										{pub.authors && pub.authors.length > 0 && (
											<Flex flexWrap="wrap" gap={1} mb={1}>
												{pub.authors.slice(0, AUTHOR_LIMIT).map((author, i) => {
													const given = author.given?.toLowerCase() ?? "";
													const family = author.family?.toLowerCase() ?? "";
													const isPI =
														family.includes("jordan") &&
														given.startsWith("tristan");

													return (
														<Text
															key={i}
															fontSize={"sm"}
															fontWeight={isPI ? "bold" : "normal"}
															textDecoration={isPI ? "underline" : "none"}
														>
															{author.given} {author.family}
															{i <
															Math.min(pub.authors!.length, AUTHOR_LIMIT) - 1
																? ","
																: ""}
														</Text>
													);
												})}
												{pub.authors.length > AUTHOR_LIMIT && (
													<Text>et al.</Text>
												)}
																						{pub.url && (
											<Link href={pub.url} target="_blank">
												{pub.url} <LuExternalLink />
											</Link>
										)}
											</Flex>
										)}


									</Box>
								))}
							</Box>
						</Box>
					))}
			</Box>

			<Separator size="lg" marginBottom={4} />

		</Flex>
	);
};

export default Publications;
