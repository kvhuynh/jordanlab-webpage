import { useState } from "react";
import { Flex, Box, Link } from "@chakra-ui/react";

export const Nav: React.FC = () => {
	return (
		<Box zIndex="sticky" position="fixed" bg="black" w="100%" p={4}>
			<Flex justify="space-between">
				<Box>
					<Link href="/" outline={"none"}>
						🦠 Jordan Lab
					</Link>
				</Box>
				<Flex gap={4}>
					<Link href="/research" outline={"none"}>
						Research
					</Link>
					<Link href="/publications" outline={"none"}>
						Publications
					</Link>
					<Link href="/people" outline={"none"}>
						People
					</Link>
					<Link href="/contact" outline={"none"}>
						Contact
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};
export default Nav;
