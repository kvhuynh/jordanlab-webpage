export type Person = {
	name: string;
	role: string;
	currentRole?: string;
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
			image: "./images/people/tristan/tristan-fresh-cropped-1x1.jpg",
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
				"Freya grew up in Denver, Colorado and completed her Bachelor of Science in Microbiology at the University of Minnesota -- Twin Cities. Before college, she had no concept of biomedical research as a career and credit her time there and undergraduate research mentor, Dr. Tanya Freedman, for illuminating her path into research. She proceeded to spend two years at NIAID diving into virology techniques and adenovirus vectors as vaccine platforms before coming to the University of Washington as a Microbiology PhD student. She's super excited by molecular mechanisms of viral evasion and antiviral counter-defenses and what better way to immerse myself then studying both simultaneously in the novel virus-host pair of giant viruses and their amoeba hosts. In her free time, she loves to travel both locally and internationally, enjoy nature, craft, read, and admire any cat she encounters.",
			links: [{ label: "Publications", orcId: "" }],
		},
		{
			name: "Maria McCavitt-Malvido",
			role: "2nd year graduate student",
			email: "mfmm@uw.edu",
			image: "./images/people/maria/maria.jpg",
			description:
				"Maria is from the Bay Area in California. She received her B.S. in Microbiology from the University of California, San Diego. After graduating, she pursued her interest in neglected diseases at Mapp Biopharmaceutical, where she contributed to the development of antibody therapies targeting neglected diseases such as Ebola virus, Nipah virus, and botulism. Motivated to better understand host-pathogen interactions, she then joined Dr. Melanie Ott’s lab at the Gladstone Institutes, using human airway organoids to investigate immune responses to respiratory viruses, including SARS-CoV-2 and influenza. Maria joined the UW Pathobiology graduate program in 2024 and is co-mentored by Dr. Tristan Jordan and Dr. Ram Savan. Her projects focus on transcriptional regulation and the generation of self-PAMPS, as well as understanding how the post-translational modification prenylation can contribute to host restriction of viral replication. When she’s not in the lab, Maria enjoys spending time with her cats, reading, and enjoying the beautiful Washington outdoors.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Hunter Toyoda",
			role: "2nd year graduate student",
			email: "htoyoda@uw.edu",
			image: "./images/people/hunter/hunter-swag-cropped-1x1.jpg",
			description:
				"Hunter grew up in the Pacific Northwest in Kirkland, Washington. He received his B.S. in Biochemistry on the opposite coast at Suffolk University in Boston. At Suffolk, he had his first research experience working in Dr. Melanie Berkmen’s lab, studying protein–protein interactions within the conjugation machinery of Bacillus subtilis. After graduating, he joined Dr. Philip Kranzusch’s lab at the Dana-Farber Cancer Institute, where he used structural biology and biochemistry to study the molecular mechanisms of antiviral signaling pathways in humans and bacteria. Hunter joined UW’s Microbiology program in 2024, where his project now focuses on how giant viruses employ structural mimicry to antagonize the immune responses of amoeba. In his free time, Hunter enjoys exploring the outdoors, drinking cold brew, and rooting on his favorite Seattle sports teams.",
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
				"Avi is a native of India, belonging to the northern roots of the country. She began her academic career at Lucknow University, earning a bachelor’s degree from the Faculty of Science, before moving to Jiwaji University, Gwalior, to complete her Master’s degree in Biotechnology. During her internship at Defense Research and Development Establishment (DRDE), she was introduced to genetic modification of Vibrio cholerae by using the transposon Tn5. This experience sparked a passion for molecular biology that led her to pursue a PhD at the Indian Institute of Technology Bombay (IITB) in the Molecular Virology lab. Supported by the CSIR NET fellowship, she conducted research on genome evolution and its segregation using DNA packaging in Giant viruses. Following her Ph.D., Avi worked as a post-doctoral researcher at Laboratoire Information Génomique et Structurale (IGS) at Institut de Microbiologie de la Méditerranée, in Marseille, France, one of the pioneer labs in the field of Giant viruses. Here, she played a key role in the development and validation of a new standardized protocol for genetic manipulation of host and virus.She joined the Jordan Lab in 2025 as a Research Scientist at the University of Washington. Here, she focuses on identifying and characterizing antiviral systems in lower eukaryotes, specifically in Acanthamoeba. Drawing on a decade of experience in giant virus and amoeba research, her work centers on understanding host restriction factors against giant virus infection and the viral countermeasures which facilitate replication and propagation within diverse Acanthamoeba strains. \nOutside the lab, Avi loves to see new places and learn about different customs and traditions. She is also a passionate cook who loves exploring the world through its flavors, constantly experimenting with new dishes and techniques from across the globe.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Bernie Sentigar",
			role: "Lab Manager/Research Scientist",
			email: "bsenti@uw.edu",
			image: "./images/people/bernie/bernie-cropped-1x1.jpg",
			description:
				"Bernie has called the pacific northwest their home since 2011 when their family moved here from Tucson, AZ. They attended Tacoma Community College in Tacoma, WA and earned their Associate of Science in 2021, then tranferred to the University of Washington where they earned their Bachelors of Science with Honors in Microbiology in 2024. It was during the fall of their junior year at the UW that they were introduced to and joined the lab of Dr. Tristan X. Jordan, and learned about the fascinating world of giant viruses that infect ameoba. Since then, Bernie has grown from an undergradute research assistant to full-time lab manager and research science technician. Over the years in the Jordan Lab, they have gained significant interest in virology and antiviral systems and is looking forward to furthering their knowledge as they mature as a scientist in the field. In the lab, Bernie can often be found bopping around binging podcasts as they work on experiments. When not at work, Bernie enjoys spending time with their friends and their partner, as well as drawing, reading, running, and cuddling their cat, Hex.",
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
				"Brandon grew up in Kansas City, Missouri where his passion for microbiological research and science drew him to the University of Washington for his undergraduate degree. Majoring in microbiology, Brandon is finishing his bachelor's of science Winter 2026. His journey into scientific research began in 2024 with his position as an undergraduate researcher with Dr. Joseph Mougous' laboratory in which aimed to elucidate mechanisms of interbacterial antagonism within the gut microbiome, specifically investigating mechanisms of intoxication within the Bacteroides genus via the utilization of type 6 secretion systems. Now in Dr. Tristan Jordan's lab, he explores mechanisms of antiviral defense and viral evasion within unicellular, amoeba host systems. He's excited to continue his education in graduate school with hopes of studying host-pathogen interactions, microbiome dynamics, and pathogen defense mechanisms. Outside of the lab, Brandon enjoys listening to music, crocheting, reading, and eating lots of food.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Anna Valpiani",
			role: "Undergraduate",
			email: "annav10@uw.edu",
			image: "./images/people/virus.png",
			description: "infinite staller",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Rachel Schneider",
			role: "Undergraduate",
			email: "res29@uw.edu",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description: "WELCOME!!!",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Edward Turner",
			role: "Undergraduate",
			email: "eji05@uw.edu",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description: "",
			links: [{ label: "Publications", orcId: "#" }],
		},
	],
	alumni: [
		{
			name: "Charlotte Nguyen",
			role: "Undergraduate",
			currentRole: "",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Isabelle Ai",
			role: "Undergraduate",
			currentRole: "Undergraduate in some LLM lab my prodigy 🥹",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Marty Kelty",
			role: "Rotation Student",
			currentRole: "Graduate student in the Paredez Lab",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Ryan Voves",
			role: "Undergraduate",
			currentRole: "Sales Representative at GE HealthCare",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Eva Alleman",
			role: "Rotation Student",
			currentRole: "Graduate student in the Malik Lab",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Jules Milovich",
			role: "Undergraduate",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Jacob Gravett",
			role: "Undergraduate",
			currentRole: "Completing medical school",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Christopher Dahl",
			role: "Undergraduate",
			currentRole: "Laboratory Scientist at Pfizer",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Victoria How",
			role: "Undergraduate",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Benjamin Kocsis",
			role: "Rotation Student",
			currentRole: "Graduate student in the Guo Lab",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Zeidy Garcia",
			role: "Rotation Student",
			currentRole: "Graduate student in the Lagunoff Lab",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Eve Farrell",
			role: "Lab Staff",
			currentRole: "Graduate student in the Taylor Lab HARVARD WOWW ",
			image: "./images/people/alumni/eve/eve-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Amanda Antoch",
			role: "Rotation Student",
			currentRole: "Graduate student in the Meeske Lab",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
		{
			name: "Miles Colrey",
			role: "Rotation Student",
			currentRole: "Graduate Student in the Mitchell Lab",
			image: "./images/people/brandon/brandon-cropped-1x1.jpg",
			description:
				"Research focus description goes here. Could be 2–3 sentences about PI.",
			links: [{ label: "Publications", orcId: "#" }],
		},
	],
};
