// import { useState } from "react";
// import { Flex, Box, Link } from "@chakra-ui/react";

// export const Nav: React.FC = () => {
// 	return (
// 		<Box zIndex="sticky" position="fixed" bg="#black" w="100%" p={4}>
// 			<Flex justify="space-between">
// 				<Box>
// 					<Link href="/" outline={"none"} fontSize={"2xl"}>
// 						🦠 Jordan Lab
// 					</Link>
// 				</Box>
// 				<Flex gap={4}>
// 					<Link href="/research" outline={"none"} fontSize={"2xl"}>
// 						Research
// 					</Link>
// 					<Link href="/publications" outline={"none"} fontSize={"2xl"}>
// 						Publications
// 					</Link>
// 					<Link href="/people" outline={"none"} fontSize={"2xl"}>
// 						People
// 					</Link>
// 					<Link href="/contact" outline={"none"} fontSize={"2xl"}>
// 						Contact
// 					</Link>
// 				</Flex>
// 			</Flex>
// 		</Box>
// 	);
// };
// export default Nav;

import {
	Box,
	Flex,
	Link,
	IconButton,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { Icon } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

export const Nav: React.FC = () => {
	const { open, onToggle } = useDisclosure();

	return (
		<Box position="fixed" w="100%" bg="black" p={4} zIndex="sticky">
			<Flex justify="space-between" align="center">
				{/* Logo / Lab Name */}
				<Link href="/" fontSize="2xl" fontWeight="bold" color="white">
					🦠 Jordan Lab
				</Link>

				{/* Desktop Links */}
				<Flex gap={6} display={{ base: "none", md: "flex" }}>
					<Link href="/research" fontSize="lg" color="white">
						Research
					</Link>
					<Link href="/publications" fontSize="lg" color="white">
						Publications
					</Link>
					<Link href="/people" fontSize="lg" color="white">
						People
					</Link>
					<Link href="/contact" fontSize="lg" color="white">
						Contact
					</Link>
				</Flex>

				{/* Mobile Hamburger */}
				<IconButton
					aria-label="Toggle Menu"
					display={{ base: "flex", md: "none" }}
					onClick={onToggle}
					variant="ghost"
				>
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "black",
							padding: "10px",
							borderRadius: "50%",
						}}
					>
						<RxHamburgerMenu size={24} color="#DDDDDD" />
					</div>
				</IconButton>
			</Flex>

			{/* Mobile Dropdown */}
			{open && (
				<VStack
					bg="black"
					align="start"
					p={4}
					display={{ base: "flex", md: "none" }}
				>
					<Link href="/research" fontSize="lg" color="white" onClick={onToggle}>
						Research
					</Link>
					<Link
						href="/publications"
						fontSize="lg"
						color="white"
						onClick={onToggle}
					>
						Publications
					</Link>
					<Link href="/people" fontSize="lg" color="white" onClick={onToggle}>
						People
					</Link>
					<Link href="/contact" fontSize="lg" color="white" onClick={onToggle}>
						Contact
					</Link>
				</VStack>
			)}
		</Box>
	);
};

export default Nav;
