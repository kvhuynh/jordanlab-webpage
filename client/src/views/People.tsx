import {
	Box,
	Flex,
	Link,
	Card,
	Image,
	Text,
	Separator,
} from "@chakra-ui/react";

type Person = {
	name: string;
	role: string;
	email?: string;
	image?: string;
	description?: string;
	links?: { label: string; href: string }[];
};

const people: Record<
	"pi" | "postdocs" | "grad" | "staff" | "undergrad",
	Person[]
> = {
	pi: [
		{
			name: "Tristan Jordan",
			role: "Principal Investigator",
			email: "txjordan@uw.edu",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},
	],
	postdocs: [
		{
			name: "Avi Shukla",
			role: "Postdoctoral Researcher",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},
	],
	grad: [
		{
			name: "Freya van't veer",
			role: "x year graduate student",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},		{
			name: "Freya van't veer",
			role: "x year graduate student",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},		{
			name: "Freya van't veer",
			role: "x year graduate student",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},
		
	],
	staff: [
		{
			name: "Bernie Sentigar",
			role: "Lab Manager/Research Scientist",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},		{
			name: "Kevin Huynh",
			role: "Research Scientist",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [
				{ label: "Google Scholar", href: "#" },
			],
		},
	],
	undergrad: [		{
		name: "Brandon Duong",
		role: "x year graduate student",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
		description:
			"Research focus description goes here. Could be 2–3 sentences about PI.",
		links: [
			{ label: "Google Scholar", href: "#" },
		],
	},		{
		name: "Anna Valpiani",
		role: "x year graduate student",
		image:
			"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
		description:
			"Research focus description goes here. Could be 2–3 sentences about PI.",
		links: [
			{ label: "Google Scholar", href: "#" },
		],
	},],
};

const Section: React.FC<{ title: string; members: Person[] }> = ({
	title,
	members,
}) => {
	if (members.length === 0) return null;

	return (
		<Box mt={10}>
			<Box maxW="800px" mx="auto">
			<Flex bg="" py={2} px={2}>
				<Text textStyle="4xl" color="white">
					{title}
				</Text>
			</Flex>
			{members.map((p, idx) => (
				<Card.Root
					key={idx}
					backgroundColor=""
					border="none"
					borderRadius={0}
					mt={4}
					maxW="800px"     // limit width
					w="100%"         // allow responsive shrink
					mx="auto"  
				>
					<Card.Body gap="2">
						<Flex justifyContent="space-between" align="flex-start">
							<Card.Title mt="2" color="white">
								<Text fontSize="xl" fontWeight="bold">
									{p.name}
								</Text>
								<Text textStyle="sm" fontWeight="light">
									{p.role}
								</Text>
								{p.email && (
									<Link href={`mailto:${p.email}`}>
										<Text textStyle="sm" color="blue">
											{p.email}
										</Text>
									</Link>
								)}
							</Card.Title>
							{p.image && (
								<Box>
									<Image
										height="150px"
										objectFit="cover"
										src={p.image}
										alt={p.name}
									/>
								</Box>
							)}
						</Flex>
						{p.description && (
							<Card.Description color="">{p.description}</Card.Description>
						)}
					</Card.Body>
					{p.links && (
						<Card.Footer justifyContent="flex-end" gap={4}>
							{p.links.map((l, i) => (
								<Link key={i} href={l.href}>
									{l.label}
								</Link>
							))}
						</Card.Footer>
					)}
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
		</Flex>
	);
};

export default People;
