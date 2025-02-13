import { useState } from "react";
import {
	Container,
	HStack,
	Icon,
	Link,
	Stack,
	Image,
	Box,
	Flex,
} from "@chakra-ui/react";

import lmpLogo from "../assets/uw-lab-medicine-pathology.png";
import microLogo from "../assets/uw-dept-logo-department-of-microbiology/uw-dept-logo-department-of-microbiology-horizontal.svg";

export const Footer: React.FC = () => {
	return (
		<Box bg="beige" w="100%" position="sticky">
			<Flex direction="row" align="center">
				<Link href="https://dlmp.uw.edu/" target="_blank">
					<Image src={lmpLogo} height="100px"></Image>
				</Link>
				<Link
					href="https://microbiology.washington.edu/uw-microbiology-home"
					target="_blank"
				>
					<Image src={microLogo} height="60px"></Image>
				</Link>
			</Flex>
		</Box>
	);
};
export default Footer;
