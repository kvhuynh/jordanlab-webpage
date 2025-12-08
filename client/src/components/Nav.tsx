import {
	Box,
	Flex,
	Link,
	IconButton,
	VStack,
	Image,
	useDisclosure,
} from "@chakra-ui/react";

import logo from "../assets/logo1.png";
import { DarkModeSwitch } from "./DarkModeSwitch";

import { RxHamburgerMenu } from "react-icons/rx";

export const Nav: React.FC = () => {
	const { open, onToggle } = useDisclosure();

	return (
		<Box position="fixed" w="100%" bg="var(--bg-nav);" p={4} zIndex="sticky">
			<Flex justify="space-between" align="center">
				<Link href="/" display="flex" alignItems="center">
					<Box
						height="30px" // ← navbar height stays fixed
						width="150px"
						overflow="visible" // allow logo to exceed this box visually
						position="relative"
					>
						<Image
							src={logo}
							height="150px" // ← make this as large as you want
							position="absolute" // remove from layout flow
							top="50%"
							left="50%"
							transform="translate(-50%, -50%)"
							// objectFit="contain"
							pointerEvents="none"
						/>
					</Box>
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
