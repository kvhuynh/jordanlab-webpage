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
			image: "./images/people/tristan/tristan-cropped-1x1.jpg",
			description:
				"I was born and raised in Virginia Beach, VA. Despite loving The South, warmth, and sunshine, my academic career has taken me north(west)ward where I have been excited to launch my lab at The University of Washington. I completed my bachelor’s degree at The College of Wooster in Wooster, Ohio with a double major in Biology and Classical Studies. Afterwards I joined a NIH Postbaccalaureate Research Education Program (PREP) at The University of Chicago in the lab of Dr. Glenn Randall. After completion of PREP, I continued in Dr. Randall’s lab for my PhD where I studied the signaling pathways that control lipid metabolism (specifically the autophagic degradation of lipid droplets) during dengue virus infection. From Chicago, I moved to New York where I joined the lab of Dr. Benjamin tenOever (first at the Icahn School of Medicine at Mount Sinai and then at NYU Grossman School of Medicine) as a postdoc. While I spent significant time working on SARS-CoV-2, it is in Dr. tenOever’s lab that I discovered my love of eukaryotic antiviral immunity - the evolution of diverse antiviral strategies, how viruses evade these, and the consequences of these antiviral strategies to the host. Since starting the lab in 2023, this has been our focus and I cannot be happier. While Seattle is certainly different from New York, Chicago, or the South, I’ve enjoyed the transition to the PNW and am constantly amazed at how gorgeous it is out here. When I am not science-ing, you can find me reading, playing video games, or enjoying the beautiful outdoors of the PNW.",
			links: [{ label: "Publications", orcId: "#" }],
		},
	],
	postdocs: [],
	grad: [
		{
			name: "Freya van't veer",
			role: "3rd year graduate student",
			email: "freyav@uw.edu",
			image: "./images/people/freya/freya-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "" }],
		},
		{
			name: "Maria McCavitt-Malvido",
			role: "2nd year graduate student",
			email: "mfmm@uw.edu",
			image: "./images/people/maria/maria.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Hunter Toyoda",
			role: "2nd year graduate student",
			email: "htoyoda@uw.edu",
			image: "./images/people/hunter/hunter-swag-cropped-1x1.jpg",
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
			image: "./images/people/avi/avi-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Bernie Sentigar",
			role: "Lab Manager/Research Scientist",
			email: "bsenti@uw.edu",
			image: "./images/people/bernie/bernie-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Kevin Huynh",
			role: "Research Scientist",
			email: "kvhuynh@uw.edu",
			image: "./images/people/kevin/kevin.jpeg",
			description:
				"Kevin was born and raised in Washington and earned a B.S. in Molecular, Cellular, and Developmental Biology from the University of Washington in 2021. He conducted research in the Parrish Lab, studying the molecular mechanisms of neuropathic pain. Since then, his research interests have expanded to include computational methods for biological discovery, and his current work in the lab focuses on identifying antiviral proteins in Eukarya using structural and sequence-based homology approaches at scale. He also made this website 🤓.",
			links: [{ label: "Publications", orcId: "0009-0000-6920-9935" }],
		},
	],
	undergrad: [
		{
			name: "Brandon Duong",
			role: "Undergraduate",
			email: "bduong03@uw.edu",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
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
	],
};
