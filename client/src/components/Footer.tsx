import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
	return (
		<Box bg="var(--bg-nav)" w="100%" position="sticky">
			<Flex justifyContent={"center"} alignItems={"center"}>
				<Text color="var(--text)" fontSize={"small"}>
					© kevin huynh :)
				</Text>
			</Flex>
		</Box>
	);
};
export default Footer;
