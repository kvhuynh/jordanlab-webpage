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
    Separator
} from "@chakra-ui/react";
// import { Avatar } from "@/components/ui/avatar";

export const People: React.FC = () => {
	return (
		<>
			<Flex direction={"column"} paddingTop={75}>
				<Text textStyle={"6xl"} alignSelf={"flex-start"} marginBottom={"30px"}>
					People
				</Text>
                <Separator size="lg"></Separator>
				<Card.Root backgroundColor={"white"} border={"none"}>
					<Card.Body gap="2">
						<Flex justifyContent="space-between">
							<Card.Title mt="2" color="black">
								<Text>Tristan Jordan</Text>
								<Text textStyle="sm" fontWeight={"light"}>
									Principal Investigator
								</Text>
								<Link>
									<Text textStyle="sm" fontWeight={""} color={"blue"}>
										txjordan@uw.edu
									</Text>
								</Link>
							</Card.Title>
							<Box>
								<Image height="150px" src="https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B" />
							</Box>
						</Flex>
						<Card.Description color={"black"}>
							i hate my lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdf
						</Card.Description>
					</Card.Body>
					<Card.Footer justifyContent="flex-end">
						<Link href="">link 1</Link>
						<Link href="">link 2</Link>
						<Link href="">link 3</Link>
						<Link href="">link 4</Link>
					</Card.Footer>
				</Card.Root>
				<Card.Root backgroundColor={"white"} border={"none"}>
					<Card.Body gap="2">
						<Flex justifyContent="space-between">
							<Card.Title mt="2" color="black">
								<Text>Tristan Jordan</Text>
								<Text textStyle="sm" fontWeight={"light"}>
									Principal Investigator
								</Text>
								<Link>
									<Text textStyle="sm" fontWeight={""} color={"blue"}>
										txjordan@uw.edu
									</Text>
								</Link>
							</Card.Title>
							<Box>
								<Image height="150px" src="https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B" />
							</Box>
						</Flex>
						<Card.Description color={"black"}>
							i hate my lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdf
						</Card.Description>
					</Card.Body>
					<Card.Footer justifyContent="flex-end">
						<Link href="">link 1</Link>
						<Link href="">link 2</Link>
						<Link href="">link 3</Link>
						<Link href="">link 4</Link>
					</Card.Footer>
				</Card.Root>
				<Card.Root backgroundColor={"white"} border={"none"}>
					<Card.Body gap="2">
						<Flex justifyContent="space-between">
							<Card.Title mt="2" color="black">
								<Text>Tristan Jordan</Text>
								<Text textStyle="sm" fontWeight={"light"}>
									Principal Investigator
								</Text>
								<Link>
									<Text textStyle="sm" fontWeight={""} color={"blue"}>
										txjordan@uw.edu
									</Text>
								</Link>
							</Card.Title>
							<Box>
								<Image height="150px" src="https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B" />
							</Box>
						</Flex>
						<Card.Description color={"black"}>
							i hate my lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdf
						</Card.Description>
					</Card.Body>
					<Card.Footer justifyContent="flex-end">
						<Link href="">link 1</Link>
						<Link href="">link 2</Link>
						<Link href="">link 3</Link>
						<Link href="">link 4</Link>
					</Card.Footer>
				</Card.Root>
				<Card.Root backgroundColor={"white"} border={"none"}>
					<Card.Body gap="2">
						<Flex justifyContent="space-between">
							<Card.Title mt="2" color="black">
								<Text>Tristan Jordan</Text>
								<Text textStyle="sm" fontWeight={"light"}>
									Principal Investigator
								</Text>
								<Link>
									<Text textStyle="sm" fontWeight={""} color={"blue"}>
										txjordan@uw.edu
									</Text>
								</Link>
							</Card.Title>
							<Box>
								<Image height="150px" src="https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B" />
							</Box>
						</Flex>
						<Card.Description color={"black"}>
							i hate my lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdf
						</Card.Description>
					</Card.Body>
					<Card.Footer justifyContent="flex-end">
						<Link href="">link 1</Link>
						<Link href="">link 2</Link>
						<Link href="">link 3</Link>
						<Link href="">link 4</Link>
					</Card.Footer>
				</Card.Root>
				<Card.Root backgroundColor={"white"} border={"none"}>
					<Card.Body gap="2">
						<Flex justifyContent="space-between">
							<Card.Title mt="2" color="black">
								<Text>Tristan Jordan</Text>
								<Text textStyle="sm" fontWeight={"light"}>
									Principal Investigator
								</Text>
								<Link>
									<Text textStyle="sm" fontWeight={""} color={"blue"}>
										txjordan@uw.edu
									</Text>
								</Link>
							</Card.Title>
							<Box>
								<Image height="150px" src="https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B" />
							</Box>
						</Flex>
						<Card.Description color={"black"}>
							i hate my lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdfi hate my
							lifesfasdfasdfasfasdfsfasdfasdf
						</Card.Description>
					</Card.Body>
					<Card.Footer justifyContent="flex-end">
						<Link href="">link 1</Link>
						<Link href="">link 2</Link>
						<Link href="">link 3</Link>
						<Link href="">link 4</Link>
					</Card.Footer>
				</Card.Root>
			</Flex>
		</>
	);
};

export default People;
