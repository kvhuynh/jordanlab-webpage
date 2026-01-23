export type Person = {
	name: string;
	role: string;
	email?: string;
	image?: string;
	description?: string;
	links?: { label: string; orcId: string }[];
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
				"./images/people/tristan/tristan-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
	],
	postdocs: [],
	grad: [
		{
			name: "Freya van't veer",
			role: "3rd year graduate student",
			email: "freyav@uw.edu",
			image:
				"./images/people/freya/freya-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "" }],
		},
		{
			name: "Maria McCavitt-Malvido",
			role: "2nd year graduate student",
			email: "mfmm@uw.edu",
			image:
				"./images/people/maria/maria.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Hunter Toyoda",
			role: "2nd year graduate student",
			email: "htoyoda@uw.edu",
			image:
				"./images/people/hunter/hunter-swag-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
	],
	staff: [
		{
			name: "Avi Shukla",
			role: "Staff Scientist",
			email: "ashukl3@uw.edu",
			image:
				"./images/people/avi/avi-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Bernie Sentigar",
			role: "Lab Manager/Research Scientist",
			email: "bsenti@uw.edu",
			image:
				"./images/people/bernie/bernie-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Kevin Huynh",
			role: "Research Scientist",
			email: "kvhuynh@uw.edu",
			image:
				"./images/people/kevin/kevin.jpeg",
			description: "Kevin was born and raised in Washington and earned a B.S. in Molecular, Cellular, and Developmental Biology from the University of Washington in 2021. He conducted research in the Parrish Lab, studying the molecular mechanisms of neuropathic pain. His research interests expanded to include computational methods for biological discovery, and his current work focuses on identifying homologous proteins using structural and sequence-based homology approaches at scale. He also made this website 🤓.",
			links: [{ label: "Publications", orcId: "0009-0000-6920-9935" }],
		},
	],
	undergrad: [
		{
			name: "Brandon Duong",
			role: "Undergraduate",
			email: "bduong03@uw.edu",
			image:
				"./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Anna Valpiani",
			role: "Undergraduate",
			email: "annav10@uw.edu",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
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
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			image:
				"https://microbiology.washington.edu/sites/default/files/styles/profile_detail_page/public/pictures/2023-01/Jordan_Tristan_pic.jpeg?itok=C6tho98B",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
	],
};
