import {
	Box,
	Flex,
	Link,
	Card,
	Image,
	Text,
	Separator,
} from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";

import { Person, people } from "../data/people";

const ActiveMembers: React.FC<{ title: string; members: Person[] }> = ({
	title,
	members,
}) => {
	if (members.length === 0) return null;

	return (
		<Box mt={10}>
			<Box maxW="800px" mx="auto">
				<Flex bg="" py={2} px={2}>
					<Text textStyle="4xl" color="var(--text)">
						{title}
					</Text>
				</Flex>
				{members.map((p, idx) => (
					<Card.Root
						key={idx}
						borderRadius={"md"}
						mt={4}
						maxW="800px" // limit width
						w="100%" // allow responsive shrink
						mx="auto"
						bg="none"
					>
						<Card.Body gap="2" bg="var(--bg-secondary)">
							<Flex justifyContent="space-between" align="flex-start">
								<Card.Title mt="2" color="var(--text)">
									<Text fontSize="xl" fontWeight="bold">
										{p.name}
									</Text>
									<Text textStyle="sm" fontWeight="light">
										{p.role}
									</Text>
									{p.email && (
										<Link href={`mailto:${p.email}`}>
											<Text textStyle="sm" color="#0099ff">
												{p.email}
											</Text>
										</Link>
									)}
								</Card.Title>
								{p.image && (
									<Box
										w="190px" // width can be fixed or responsive
										aspectRatio={1 / 1}
										overflow="hidden"
										borderRadius="lg"
										bg="gray.100"
									>
										<Image
											src={p.image}
											alt={p.name}
											w="100%"
											h="100%"
											objectFit="cover"
										/>
									</Box>
								)}
							</Flex>
							{p.description && (
								<Card.Description color="var(--text)">
									<Text textStyle={["lg", "md", "sm"]}>

									{p.description}
									</Text>
								</Card.Description>
							)}
						</Card.Body>
					</Card.Root>
				))}
			</Box>
		</Box>
	);
};

const PastMembers: React.FC<{ title: string; members: Person[] }> = ({
	title,
	members,
}) => {
	if (members.length === 0) return null;

	const grouped = {
		"Lab Staff": members.filter((p) => p.role === "Lab Staff"),
		"Rotation Students": members.filter((p) => p.role === "Rotation Student"),
		Undergraduates: members.filter((p) => p.role === "Undergraduate"),
	};

	return (
		<Box mt={10}>
			<Box maxW="800px" mx="auto">
				<Flex py={2} px={2}>
					<Text textStyle="4xl" color="var(--text)">
						{title}
					</Text>
				</Flex>

				{Object.entries(grouped).map(([groupTitle, groupMembers]) => {
					if (groupMembers.length === 0) return null;

					return (
						<Box key={groupTitle} mt={6}>
							<Text fontSize="2xl" mb={2}>
								{groupTitle}
							</Text>
							<Box>
								
							</Box>
							<SimpleGrid
								columns={{ base: 1, sm: 2, md: 2 }}
								gap={4}
								alignItems="stretch"
							>
								{groupMembers.map((p, idx) => (
									<Card.Root key={idx} w="100%">
										<Card.Body
											p={4} // adds space inside the card
											bg="var(--bg-secondary)"
											display="flex"
											flexDirection="column"
										>
											<Flex justifyContent={"space-between"} gap={4}>
												<Flex flexDirection={"column"}>
													<Text fontSize="xl" fontWeight="bold">
														{p.name}
													</Text>
													<Text textStyle="md" fontWeight="light">
														{p.currentRole}
													</Text>
												</Flex>
												{p.image && (
													<Box
														boxSize="120px"
														flexShrink={0}
														overflow="hidden"
														borderRadius="md"
													>
														<Image
															src={p.image}
															alt={p.name}
															boxSize="100%"
															objectFit="cover"
														/>
													</Box>
												)}
											</Flex>
										</Card.Body>
									</Card.Root>
								))}
							</SimpleGrid>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export const People: React.FC = () => {
	return (
		<Flex direction="column" paddingTop={75}>
			<Text textStyle="6xl" alignSelf="flex-start" mb={6}>
				People
			</Text>
			<Separator size="lg" />

			<ActiveMembers title="Principal Investigator" members={people.pi} />
			<ActiveMembers
				title="Postdoctoral Researchers"
				members={people.postdocs}
			/>
			<ActiveMembers title="Graduate Students" members={people.grad} />
			<ActiveMembers title="Research Staff" members={people.staff} />
			<ActiveMembers title="Undergraduates" members={people.undergrad} />
			<PastMembers title="Alumni" members={people.alumni} />
		</Flex>
	);
};

export default People;
