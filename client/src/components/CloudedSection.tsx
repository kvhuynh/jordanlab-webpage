import { Box } from "@chakra-ui/react";
import ImageCloud from "./ImageCloud";

export const CloudedSection: React.FC<{
  children: React.ReactNode;
  minHeight?: string | number;
}> = ({ children, minHeight = "100vh" }) => {
  return (
    <Box
      position="relative"
      minHeight={minHeight}
      overflow="hidden"
    //   paddingY={10}
    >
      <ImageCloud />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default CloudedSection;
