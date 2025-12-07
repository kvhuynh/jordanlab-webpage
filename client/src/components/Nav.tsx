import {
	Box,
	Flex,
	Link,
	IconButton,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

import { RxHamburgerMenu } from "react-icons/rx";

export const Nav: React.FC = () => {
	const { open, onToggle } = useDisclosure();

	return (
		<Box position="fixed" w="100%" bg="var(--bg-nav);" p={4} zIndex="sticky">
			<Flex justify="space-between" align="center">
				{/* Left: Lab Name */}
				<Link href="/" fontSize="2xl" fontWeight="bold" color="var(--text)">
					🦠 The Jordan Lab
				</Link>

				{/* Desktop Nav + Toggle */}
				<Flex gap={6} display={{ base: "none", md: "flex" }} align="center">
					<Link href="/research" fontSize="lg" color="var(--text)">
						Research
					</Link>
					<Link href="/publications" fontSize="lg" color="var(--text)">
						Publications
					</Link>
					<Link href="/people" fontSize="lg" color="var(--text)">
						People
					</Link>
					<Link href="/news" fontSize="lg" color="var(--text)">
						News
					</Link>
					<Link href="/contact" fontSize="lg" color="var(--text)">
						Contact
					</Link>
					<DarkModeSwitch />
				</Flex>

				{/* Mobile Right-Side Buttons */}
				<Flex display={{ base: "flex", md: "none" }} gap={3} align="center">
					<DarkModeSwitch /> {/* stays right of dropdown icon */}
					<IconButton
						aria-label="Toggle Menu"
						onClick={onToggle}
						backgroundColor="var(--bg)"
					>
						<RxHamburgerMenu size={24} color="var(--bg-icon)" />
					</IconButton>
				</Flex>
			</Flex>

			{/* Mobile Dropdown */}
			{open && (
				<VStack
					bg="var(--bg)"
					align="start"
					p={4}
					display={{ base: "flex", md: "none" }}
					borderRadius={"5%"}
				>
					<Link
						href="/research"
						fontSize="lg"
						color="var(--text)"
						onClick={onToggle}
					>
						Research
					</Link>
					<Link
						href="/publications"
						fontSize="lg"
						color="var(--text)"
						onClick={onToggle}
					>
						Publications
					</Link>
					<Link
						href="/people"
						fontSize="lg"
						color="var(--text)"
						onClick={onToggle}
					>
						People
					</Link>
					<Link
						href="/contact"
						fontSize="lg"
						color="var(--text)"
						onClick={onToggle}
					>
						Contact
					</Link>
				</VStack>
			)}
		</Box>
	);
};

export default Nav;
