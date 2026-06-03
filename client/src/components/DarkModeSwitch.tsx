import { Switch, Flex, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export const DarkModeSwitch: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	const isDark = theme === "dark";

	return (
		<Flex alignItems="center" gap={2}>
			<Switch.Root
				colorPalette="blue"
				size="lg"
				checked={isDark}
				onCheckedChange={toggleTheme}
			>
				<Switch.HiddenInput />
				<Switch.Control>
					<Switch.Thumb />
					<Switch.Indicator fallback={<Icon as={FaSun} color="yellow.400" />}>
						<Icon as={FaMoon} color="blue.200" />
					</Switch.Indicator>
				</Switch.Control>
			</Switch.Root>
		</Flex>
	);
};
