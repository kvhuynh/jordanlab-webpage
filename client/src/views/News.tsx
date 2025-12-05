import {
    Box,
    Flex,
    Link,
    Card,
    Image,
    Text,
    Separator,
} from "@chakra-ui/react";

import { Person, people } from "../data/people"


export const News: React.FC = () => {
    return (
        <Flex direction="column" paddingTop={75}>
            <Text textStyle="6xl" alignSelf="flex-start" mb={6}>
                News
            </Text>

        </Flex>
    );
};

export default News;
