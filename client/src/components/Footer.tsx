import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
	return (
		<Box bg="var(--bg-nav)" w="100%" position="sticky" padding={"20px"}>
			<Flex justifyContent={"center"} alignItems={"center"}>
				<Text color="var(--text)" fontSize={"medium"}>
					University of Washington | School of Medicine — Department of
					Microbiology | Department of Laboratory Medicine & Pathology <br />
					© 2025 The Jordan Lab <br />
					powered by kevin huynh :)
				</Text>
			</Flex>
		</Box>
	);
};
export default Footer;
