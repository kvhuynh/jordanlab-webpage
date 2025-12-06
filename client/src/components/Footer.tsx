import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
	return (
		<Box bg="#141414" w="100%" position="sticky">
			<Flex justifyContent={"center"} alignItems={"center"} h={65}>
				<Text fontSize={"medium"} fontWeight={"bold"}>
					© Kevin Huynh
				</Text>
			</Flex>
		</Box>
	);
};
export default Footer;
