import { Box, Flex, Link, Text, Spinner, Separator } from "@chakra-ui/react";

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

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPublications("0000-0002-0602-2871").then((data: Publication[]) => {
			setPublications(data);
			setLoading(false);
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
		{},
	);

	if (loading) {
		return (
			<Flex justify="center" align="center" height="300px" gap={7}>
				<Spinner size="xl" /> <Text fontSize="lg">Fetching data...</Text>
			</Flex>
		);
	}
	const AUTHOR_LIMIT = 8;

	return (
		<Flex flexDirection={"column"} paddingTop={75}>
			<Text textStyle={"6xl"} alignSelf={"flex-start"} mb={6}>
				Publications
			</Text>
			<Separator size="lg" />

			<Box>
				{Object.keys(grouped)
					.sort((a, b) => Number(b) - Number(a))
					.map((year) => (
						<Box key={year} mt={10}>
							<Box maxW="800px" mx="auto">
								{/* Year header */}
								<Flex py={2} px={0}>
									<Text textStyle="6xl" textAlign="left">
										{year}
									</Text>
								</Flex>

								{/* Publications in this year */}
								{grouped[year].map((pub, idx) => (
									<Box key={idx} mb={6}>
										{/* Title */}
										<Text textStyle="4xl" textAlign="left" mb={1}>
											{pub.title ?? "No title"}
										</Text>

										{/* Authors + link */}
										<Flex direction="column" align="flex-start" mb={1}>
											{/* Authors */}
											{/* Authors */}
											{(() => {
												const authors = Array.isArray(pub.authors)
													? pub.authors
													: [];

												if (authors.length === 0) return null;

												const total = authors.length;
												const showExtra = total > AUTHOR_LIMIT;
												const visibleAuthors = showExtra
													? [
															...authors.slice(0, AUTHOR_LIMIT - 1),
															authors[total - 1],
														]
													: authors;

												return (
													<Flex flexWrap="wrap" gap={1} mb={1}>
														{visibleAuthors.map((author, i) => {
															const given = author?.given ?? "";
															const family = author?.family ?? "";

															const isPI =
																family.toLowerCase().includes("jordan") &&
																given.toLowerCase().startsWith("tristan");

															const isLast = i === visibleAuthors.length - 1;

															return (
																<Text
																	key={`${given}-${family}-${i}`}
																	fontSize="sm"
																	fontWeight={isPI ? "bold" : "normal"}
																	textDecoration={isPI ? "underline" : "none"}
																>
																	{given} {family}
																	{!isLast ? "," : ""}
																</Text>
															);
														})}

														{showExtra && <Text fontSize="sm">et al.</Text>}
													</Flex>
												);
											})()}

											{/* URL renders independently */}
											{pub.url && (
												<Link
													href={pub.url}
													target="_blank"
													fontSize="sm"
													display="inline-flex"
													alignItems="center"
													gap={1}
												>
													{pub.url} <LuExternalLink />
												</Link>
											)}
										</Flex>
									</Box>
								))}
							</Box>
						</Box>
					))}
			</Box>
		</Flex>
	);
};

export default Publications;
