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
import { Parallax } from "react-scroll-parallax";

export const Research: React.FC = () => {
	return (
		<Flex flexDirection={"column"} paddingTop={75}>
			<Text textStyle={"6xl"} alignSelf={"flex-start"} marginBottom={"30px"}>
				Research
			</Text>
			<Separator size="lg" marginBottom={4}></Separator>
			<Parallax speed={-20}>
				<Flex
					position="relative"
					zIndex={1}
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="white"
					bg="rgba(0, 0, 0, 0.3)"
				>
					<Text textStyle={"5xl"} marginBottom={6}>
						Research section 1
					</Text>
					<Text>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
						nostrum a eos minima, laborum ducimus, corrupti hic temporibus
						commodi vero voluptas rerum accusantium veniam fugiat mollitia vel
						sequi repellat harum! Eaque beatae eveniet, corrupti vero harum
						possimus fugit non eos veniam unde? Ab voluptatem quo ipsum neque
						mollitia debitis earum ducimus deserunt quam odit reiciendis, cumque
						voluptatibus exercitationem quia vitae.
					</Text>
				</Flex>
			</Parallax>{" "}
			<Parallax speed={-20}>
				<Flex
					position="relative"
					zIndex={1}
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="white"
					bg="rgba(0, 0, 0, 0.3)"
				>
					<Text textStyle={"5xl"} marginBottom={6}>
						Research section 1
					</Text>
					<Text>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
						nostrum a eos minima, laborum ducimus, corrupti hic temporibus
						commodi vero voluptas rerum accusantium veniam fugiat mollitia vel
						sequi repellat harum! Eaque beatae eveniet, corrupti vero harum
						possimus fugit non eos veniam unde? Ab voluptatem quo ipsum neque
						mollitia debitis earum ducimus deserunt quam odit reiciendis, cumque
						voluptatibus exercitationem quia vitae.
					</Text>
				</Flex>
			</Parallax>{" "}
			<Parallax speed={-20}>
				<Flex
					position="relative"
					zIndex={1}
					direction="column"
					align="center"
					justify="center"
					minHeight="100vh"
					color="white"
					bg="rgba(0, 0, 0, 0.3)"
				>
					<Text textStyle={"5xl"} marginBottom={6}>
						Research section 1
					</Text>
					<Text>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
						nostrum a eos minima, laborum ducimus, corrupti hic temporibus
						commodi vero voluptas rerum accusantium veniam fugiat mollitia vel
						sequi repellat harum! Eaque beatae eveniet, corrupti vero harum
						possimus fugit non eos veniam unde? Ab voluptatem quo ipsum neque
						mollitia debitis earum ducimus deserunt quam odit reiciendis, cumque
						voluptatibus exercitationem quia vitae.
					</Text>
				</Flex>
			</Parallax>{" "}
		</Flex>
	);
};

export default Research;
