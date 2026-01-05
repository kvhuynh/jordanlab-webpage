

export type Person = {
	name: string;
	role: string;
	email?: string;
	image?: string;
	description?: string;
	links?: { label: string; href: string }[];
};

export const people: Record<
	"pi" | "postdocs" | "grad" | "staff" | "undergrad" | "alumni",
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
			links: [{ label: "Google Scholar", href: "#" }],
		},
	],
	postdocs: [],
	grad: [
		{
			name: "Freya van't veer",
			role: "3rd year graduate student",
			email: "freyav@uw.edu",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Maria McCavitt-Malvido",
			role: "2nd year graduate student",
			email: "mfmm@uw.edu",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Hunter Toyoda",
			role: "2nd year graduate student",
			email: "htoyoda@uw.edu",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
	],
	staff: [
		{
			name: "Avi Shukla",
			role: "Staff Scientist",
			email: "ashukl3@uw.edu",
			image:
				"./images/people/avi/avi-tree-cropped.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Bernie Sentigar",
			role: "Lab Manager/Research Scientist",
			email: "bsenti@uw.edu",
			image:
				"./images/people/bernie/bernie-fish.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Kevin Huynh",
			role: "Research Scientist",
			email: "kvhuynh@uw.edu",
			image:
				"./images/people/avi/avi-rice-cropped.jpg",
			description: "undisputed goat",
			links: [{ label: "Google Scholar", href: "#" }],
		},
	],
	undergrad: [
		{
			name: "Brandon Duong",
			role: "Undergraduate",
			email: "bduong03@uw.edu",
			image:
				"./images/people/brandon/brandon.png",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Anna Valpiani",
			role: "Undergraduate",
			email: "annav10@uw.edu",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
	],
	alumni: [
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Google Scholar", href: "#" }],
		},
	],
};
