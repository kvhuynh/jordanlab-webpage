// import { useState, useEffect } from "react";
import { Switch, Flex, Icon } from "@chakra-ui/react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { useTheme } from "../hooks/useTheme";


// export const DarkModeSwitch: React.FC = () => {
// 	const [darkMode, setDarkMode] = useState(false);
// 	const { theme, toggleTheme } = useTheme();


// 	return (
// 		<Flex alignItems="center" gap={2}>
// 			<Switch.Root
// 				// checked={!darkMode}
// 				// onCheckedChange={() => setDarkMode(!darkMode)}
// 				onCheckedChange={() => toggleTheme()}

// 				colorPalette={!theme ? "yellow" : "blue"}
// 			>
// 				<Icon as={FaSun} color={theme ? "gray.400" : "yellow"} />
// 				<Switch.HiddenInput />
// 				<Switch.Control>
// 					<Switch.Thumb />
// 				</Switch.Control>
// 				<Icon as={FaMoon} color={theme ? "blue.200" : "gray.400"} />
// 				<Switch.Label />
// 			</Switch.Root>
// 		</Flex>
// 	);
// };
// import { Flex, Icon } from "@chakra-ui/react";
// import * as Switch from "@/components/ui/switch"; // your actual import path
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export const DarkModeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // checked = true when theme === "dark"
  const isDark = theme === "dark";

  return (
    <Flex alignItems="center" gap={2}>
      <Switch.Root
        checked={isDark}
        onCheckedChange={toggleTheme}
        colorPalette={isDark ? "blue" : "yellow"}
      >
        <Icon as={FaSun} color={isDark ? "gray.600" : "yellow.200"} />

        <Switch.HiddenInput />

        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>

        <Icon as={FaMoon} color={isDark ? "blue.200" : "gray.600"} />

        <Switch.Label />
      </Switch.Root>
    </Flex>
  );
};
