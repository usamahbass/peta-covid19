import React from "react";
import {
  extendTheme,
  ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react";
import { overrides } from "./overrides";
import Fonts from "./collects/font";

const theme = extendTheme(overrides);

export const ThemeProvider = ({ children }: ChakraProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};
