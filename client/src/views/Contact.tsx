import { Box, Flex, Link, Separator, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getMaps } from "../services/services.maps";
export const Contact: React.FC = () => {
	const [embedUrl, setEmbedUrl] = useState("");

	useEffect(() => {
		getMaps().then((res) => {
			setEmbedUrl(res.url);
		});
	});

	return (
		<Flex
			paddingTop={75}
			paddingX={{ base: 4, md: 8 }}
			flexDirection={"column"}
			minH="100vh" // full height
		>
			<Text textStyle="6xl" mb={6} alignSelf={"flex-start"}>
				Contact
			</Text>
			<Separator size="lg" mb={6} />

			{/* Outer wrapper that centers everything */}
			<Flex
				flex="1"
				justifyContent="center" // vertical centering because direction=row
				alignItems="center" // horizontal centering
			>
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					justifyContent="space-between"
					gap={{ base: 6, md: 12 }}
					alignItems={{ base: "flex-start", md: "stretch" }}
				>
					{/* Map */}
					<Box flexShrink={0} width={{ base: "100%", md: "600px" }}>
						<iframe
							width="100%"
							height="550"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							src={embedUrl}
						/>
					</Box>

					{/* Contact Info */}
					<Flex flexDirection="column" flex="1" gap={6}>
						<Box>
							<Text textStyle="4xl" marginBottom={2}>
								Available Positions
							</Text>
							<Text textStyle="xl">undergraDS pleASe</Text>
						</Box>

						<Box>
							<Text textStyle="4xl" marginBottom={2}>
								Office
							</Text>
							<Text textStyle="xl">
								F753 Building, 750 Republican Street <br />
								Seattle, WA 98102 <br />
								T: 206-897-6160 <br />
								E:{" "}
								<Link href="mailto:txjordan@uw.edu" color="blue.400">
									txjordan@uw.edu
								</Link>
							</Text>
						</Box>

						<Box>
							<Text textStyle="4xl" marginBottom={2}>
								Lab Mailing Address
							</Text>
							<Text textStyle="xl">Mailbox: 3508070</Text>
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Contact;
