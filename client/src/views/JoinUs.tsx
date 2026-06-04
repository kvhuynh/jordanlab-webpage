// import {
// 	Box,
// 	Carousel,
// 	Flex,
// 	IconButton,
// 	Image,
// 	Separator,
// 	Text,
// 	Link,
// } from "@chakra-ui/react";

// import { useEffect, useState } from "react";
// import { getMaps } from "../services/services.maps";

// import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// export const JoinUs: React.FC = () => {
// 	const [embedUrl, setEmbedUrl] = useState("");

// 	useEffect(() => {
// 		getMaps().then((res) => {
// 			setEmbedUrl(res.embedUrl);
// 		});
// 	});

// 	const images = [
// 		"./images/people/202604_group_pic_cropped.jpg",
// 		"./images/people/202508_group_pic_cropped.jpg",
// 		// "./images/people/202602_group_pic.jpg"
// 	];

// 	return (
// 		<Flex
// 			paddingTop={75}
// 			paddingX={{ base: 4, md: 8 }}
// 			flexDirection={"column"}
// 			minH="100vh"
// 		>
// 			<Text textStyle="6xl" mb={6} alignSelf={"flex-start"}>
// 				Join Us!
// 			</Text>
// 			<Separator size="lg" mb={6} />
// 			<Box position="relative" minHeight="100vh" overflow="hidden">
// 				<Box>
// 					<Carousel.Root
// 						slideCount={images.length}
// 						width="100%"
// 						mx="auto"
// 						autoplay={true}
// 						loop
// 					>
// 						<Carousel.ItemGroup>
// 							{images.map((imgSrc, slideIndex) => (
// 								<Carousel.Item key={slideIndex} index={slideIndex}>
// 									<Flex
// 										direction="column"
// 										align="center"
// 										justify="center"
// 										w="100%"
// 									>
// 										{/* FIXED: Simply pass imgSrc here, since it is already the string URL */}
// 										<Image
// 											src={imgSrc}
// 											borderRadius="md"
// 											objectFit="cover"
// 											alt={`Lab group photo ${slideIndex + 1}`}
// 										/>
// 									</Flex>
// 								</Carousel.Item>
// 							))}
// 						</Carousel.ItemGroup>
// 						{images.length > 1 ? (
// 							<Carousel.Control justifyContent="center" gap="4" mt={4}>
// 								<Carousel.PrevTrigger asChild>
// 									<IconButton size="xs" variant="ghost">
// 										<LuChevronLeft />
// 									</IconButton>
// 								</Carousel.PrevTrigger>

// 								<Carousel.Indicators />

// 								<Carousel.NextTrigger asChild>
// 									<IconButton size="xs" variant="ghost">
// 										<LuChevronRight />
// 									</IconButton>
// 								</Carousel.NextTrigger>
// 							</Carousel.Control>
// 						) : null}
// 					</Carousel.Root>
// 				</Box>
// 				<Flex
// 					direction="column"
// 					align="flex-start"
// 					color="var(--text)"
// 					gap={20}
// 				>
// 					<Box>
// 						<Text textStyle={["4xl", "5xl"]} marginBottom={6}>
// 							We are currently accepting students from Microbiology,
// 							Pathobiology, MCB, M3D, and MSTP
// 						</Text>
// 					</Box>

// 					<Box>
// 						<Text textStyle={["4xl", "5xl"]} marginBottom={6}>
// 							Postdoctoral Research Fellows
// 						</Text>

// 						<Text
// 							px={{ base: 4, md: 8 }}
// 							textStyle={["sm", "3xl"]}
// 							maxW="120ch"
// 							mx="auto"
// 						>
// 							We are looking for a highly motivated, collaborative, and
// 							enthusiastic individual with a strong background in virology,
// 							immunology, biochemistry, or bioinformatics. This position
// 							requires a PhD in virology, molecular biology, or related fields.
// 							Interested individuals should email their CV and a brief
// 							description of their research interests in a single PDF file to {" "}
// 							<Link href="mailto:txjordan@uw.edu" color="blue.400">
// 								txjordan@uw.edu
// 							</Link>
// 						</Text>
// 					</Box>

// 					<Box>
// 						<Text textStyle={["4xl", "5xl"]} marginBottom={6}>
// 							Undergraduates
// 						</Text>

// 						<Text
// 							px={{ base: 4, md: 8 }}
// 							textStyle={["sm", "3xl"]}
// 							maxW="120ch"
// 							mx="auto"
// 						>
// 							Enthusiastic undergraduates in their freshman through junior years
// 							interested in the lab's research are encouraged to reach out to
// 							directly.
// 						</Text>
// 					</Box>
// 				</Flex>
// 			</Box>
// 			{/* Contact */}
// 			<Flex
// 				paddingTop={75}
// 				paddingBottom={75}
// 				paddingX={{ base: 4, md: 8 }}
// 				flexDirection={"column"}
// 				// minH="50vh" // full height
// 			>
// 				<Text textStyle="6xl" mb={6} alignSelf={"flex-start"}>
// 					Contact
// 				</Text>
// 				<Separator size="lg" mb={6} />

// 				<Flex
// 					flex="1"
// 					justifyContent="center" // vertical centering because direction=row
// 					alignItems="center" // horizontal centering
// 				>
// 					<Flex
// 						flexDirection={{ base: "column", md: "row" }}
// 						justifyContent="space-between"
// 						gap={{ base: 6, md: 12 }}
// 						alignItems={{ base: "flex-start", md: "stretch" }}
// 					>
// 						{/* Map */}
// 						<Box flexShrink={0} width={{ base: "100%", md: "600px" }}>
// 							<iframe
// 								width="100%"
// 								height="550"
// 								loading="lazy"
// 								allowFullScreen
// 								referrerPolicy="no-referrer-when-downgrade"
// 								src={embedUrl}
// 							/>
// 						</Box>

// 						{/* Contact Info */}
// 						<Flex flexDirection="column" flex="1" gap={6}>
// 							<Box>
// 								<Text textStyle="4xl" marginBottom={2}>
// 									Office
// 								</Text>
// 								<Text textStyle="xl">
// 									F753 Building, 750 Republican Street <br />
// 									Seattle, WA 98102 <br />
// 									T: 206-897-6160 <br />
// 									E:{" "}
// 									<Link href="mailto:txjordan@uw.edu" color="blue.400">
// 										txjordan@uw.edu
// 									</Link>
// 								</Text>
// 							</Box>

// 							<Box>
// 								<Text textStyle="4xl" marginBottom={2}>
// 									Lab Mailing Address
// 								</Text>
// 								<Text textStyle="xl">Mailbox: 3508070</Text>
// 							</Box>
// 						</Flex>
// 					</Flex>
// 				</Flex>
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default JoinUs;


import {
    Box,
    Carousel,
    Flex,
    IconButton,
    Image,
    Separator,
    Text,
    Link,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { getMaps } from "../services/services.maps";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const JoinUs: React.FC = () => {
    const [embedUrl, setEmbedUrl] = useState("");

    useEffect(() => {
        getMaps().then((res) => {
            setEmbedUrl(res.embedUrl);
        });
    }, []); // FIXED: Added empty dependency array to prevent infinite rendering loop

    const images = [
        "./images/people/202604_group_pic_cropped.jpg",
        "./images/people/202508_group_pic_cropped.jpg",
    ];

    return (
        <Flex
            paddingTop={75}
            paddingX={{ base: 4, md: 8 }}
            flexDirection={"column"}
            minH="100vh"
        >
            <Text textStyle="6xl" mb={6} alignSelf={"flex-start"}>
                Join Us!
            </Text>
            <Separator size="lg" mb={6} />
            
            {/* Added a bottom margin here to separate the carousel from your text grid cleanly */}
            <Box position="relative" overflow="hidden" mb={16}>
                <Box mb={12}>
                    <Carousel.Root
                        slideCount={images.length}
                        width="100%"
                        mx="auto"
                        autoplay={true}
                        loop
                    >
                        <Carousel.ItemGroup>
                            {images.map((imgSrc, slideIndex) => (
                                <Carousel.Item key={slideIndex} index={slideIndex}>
                                    <Flex
                                        direction="column"
                                        align="center"
                                        justify="center"
                                        w="100%"
                                    >
                                        <Image
                                            src={imgSrc}
                                            borderRadius="md"
                                            objectFit="cover"
                                            alt={`Lab group photo ${slideIndex + 1}`}
                                        />
                                    </Flex>
                                </Carousel.Item>
                            ))}
                        </Carousel.ItemGroup>
                        {images.length > 1 ? (
                            <Carousel.Control justifyContent="center" gap="4" mt={4}>
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
                </Box>
                
                {/* Clean, left-aligned, properly gapped text container */}
                <Flex
                    direction="column"
                    align="flex-start"
                    color="var(--text)"
                    gap={16} // Proper usage of gap!
                    maxW="120ch" // Limits the width of the text block for professional readability
                >
                    <Box>
                        <Text textStyle={["4xl", "5xl"]} fontWeight="bold">
                            We are currently accepting students from Microbiology,
                            Pathobiology, MCB, M3D, and MSTP
                        </Text>
                    </Box>

                    <Box>
                        <Text textStyle={["3xl", "4xl"]} fontWeight="semibold" marginBottom={4}>
                            Postdoctoral Research Fellows
                        </Text>

                        <Text
                            textStyle={["sm", "2xl"]}
                            lineHeight="relaxed"
                            // FIXED: Removed mx="auto" to align text strictly to the left edge
                        >
                            We are looking for a highly motivated, collaborative, and
                            enthusiastic individual with a strong background in virology,
                            immunology, biochemistry, or bioinformatics. This position
                            requires a PhD in virology, molecular biology, or related fields.
                            Interested individuals should email their CV and a brief
                            description of their research interests in a single PDF file to {" "}
                            <Link href="mailto:txjordan@uw.edu" color="blue.400">
                                txjordan@uw.edu
                            </Link>.
                        </Text>
                    </Box>

                    <Box>
                        <Text textStyle={["3xl", "4xl"]} fontWeight="semibold" marginBottom={4}>
                            Undergraduates
                        </Text>

                        <Text
                            textStyle={["sm", "2xl"]}
                            lineHeight="relaxed"
                            // FIXED: Removed mx="auto" to align text strictly to the left edge
                        >
                            Enthusiastic undergraduates in their freshman through junior years
                            interested in the lab's research are encouraged to reach out to
                            directly.
                        </Text>
                    </Box>
                </Flex>
            </Box>
            
            {/* Contact Section */}
            <Flex
                paddingTop={75}
                paddingBottom={75}
                flexDirection={"column"}
            >
                <Text textStyle="6xl" mb={6} alignSelf={"flex-start"}>
                    Contact
                </Text>
                <Separator size="lg" mb={6} />

                <Flex flex="1">
                    <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent="space-between"
                        gap={{ base: 6, md: 12 }}
                        alignItems={{ base: "flex-start", md: "stretch" }}
                        w="100%"
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
                        <Flex flexDirection="column" flex="1" gap={6} justify="center">
                            <Box>
                                <Text textStyle="4xl" marginBottom={2}>
                                    Office
                                </Text>
                                <Text textStyle="xl" lineHeight="relaxed">
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
        </Flex>
    );
};

export default JoinUs;