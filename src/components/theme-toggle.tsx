import React from "react";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Sun as SunIcon, Moon as MoonIcon } from "react-feather";

export const ThemeToggle = () => {
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <Tooltip hasArrow label="Ganti tema" placement="bottom">
      <IconButton
        size="sm"
        fontSize="lg"
        aria-label={`Ganti ke ${text} mode`}
        title={`Ganti ke ${text} mode`}
        variant="ghost"
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Tooltip>
  );
};
