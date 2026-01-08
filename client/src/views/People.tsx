import {
	Box,
	Flex,
	Link,
	Card,
	Image,
	Text,
	Separator,
} from "@chakra-ui/react";

import { Person, people } from "../data/people";

const Section: React.FC<{ title: string; members: Person[] }> = ({
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
									{p.description}
								</Card.Description>
							)}
							{p.links && (
								<Card.Footer justifyContent="flex-end" gap={4}>
									{p.links.map((l, i) => (
										<Link key={i} href={l.orcId}>
											{l.label}
										</Link>
									))}
								</Card.Footer>
							)}
						</Card.Body>
					</Card.Root>
				))}
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

			<Section title="Principal Investigator" members={people.pi} />
			<Section title="Postdoctoral Researchers" members={people.postdocs} />
			<Section title="Graduate Students" members={people.grad} />
			<Section title="Research Staff" members={people.staff} />
			<Section title="Undergraduates" members={people.undergrad} />
			<Section title="Alumni" members={people.alumni} />
		</Flex>
	);
};

export default People;
