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

import { LuExternalLink } from "react-icons/lu";

import { useState, useEffect } from "react";

import { getPublications } from "../services/services.publications";

export const Publications: React.FC = () => {
	const [publications, setPublications] = useState<any[]>([]);

	useEffect(() => {
		getPublications("0000-0002-0602-2871").then((data: any) => {
			console.log(data);
			// setPublications(data);
			setPublications(data.group);
		});
	}, []);

	return (
		<Flex flexDirection={"column"} paddingTop={75}>
			<Text textStyle={"6xl"} alignSelf={"flex-start"} marginBottom={"30px"}>
				Publications
			</Text>
			<Box>
				{publications.map((group: any) => {
					// Each group has a work-summary array
					const work = group["work-summary"][0]; // pick the first summary
					const title = work?.title?.title?.value || "No title";
					const url = work?.url?.value || "No link";
					console.log(work);

					return (
						<Flex flexDirection={"column"} marginBottom={4}>
							<Text textStyle="xl" key={work?.["put-code"]}>{title}</Text>
							<Text>
								<Link href={url} target="_blank">
									{work.url.value} <LuExternalLink />
								</Link>
							</Text>
						</Flex>
					);
				})}
			</Box>
			<Separator size="lg" marginBottom={4}></Separator>
			<Box marginBottom={6}>1</Box>
		</Flex>
	);
};

export default Publications;
