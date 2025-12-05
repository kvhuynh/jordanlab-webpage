import {
    Flex,
    Text,
} from "@chakra-ui/react";

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
