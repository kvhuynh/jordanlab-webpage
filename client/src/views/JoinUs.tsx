import { Box, Carousel, Flex, IconButton, Image, Separator, Text } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const JoinUs: React.FC = () => {
    const images = [
        "./images/people/202604_group_pic_cropped.jpg",
        "./images/people/202508_group_pic_cropped.jpg",
        // "./images/people/202602_group_pic.jpg"
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

            <Flex
                flex="1"
                justifyContent="center"
                alignItems="center"
            >
                <Carousel.Root
                    slideCount={images.length}
                    width="100%"
                    // maxW="5000px" // Bumped this up slightly so your lab group pictures look great!
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
                                    {/* FIXED: Simply pass imgSrc here, since it is already the string URL */}
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
            </Flex>
        </Flex>
    );
};

export default JoinUs;