import {
	Box,
	Flex,
	Spacer,
	Link,
	Button,
	Card,
	Stack,
	Image,
	Text,
	Separator,
} from "@chakra-ui/react";

export const Publications: React.FC = () => {
	return (
		<Flex flexDirection={"column"} paddingTop={75}>
			<Text textStyle={"6xl"} alignSelf={"flex-start"} marginBottom={"30px"}>
				Publications
			</Text>
			<Separator size="lg" marginBottom={4}></Separator>
			<Box marginBottom={6}>1</Box>
		</Flex>
	);
};

export default Publications;
