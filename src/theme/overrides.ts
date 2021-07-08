import { ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { layerStyles } from "./others/layer-styles";
import { textStyles } from "./others/text-styles";
import { styles } from "./styles";
import { colors } from "./collects/colors";
import { fonts } from "./collects/font";

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const overrides: ThemeOverride = {
  config,
  colors,
  fonts,
  styles,
  textStyles,
  layerStyles,
  components: {
    Drawer: {
      variants: {
        alwaysOpen: {
          dialog: {
            pointerEvents: "auto",
          },
          dialogContainer: {
            pointerEvents: "none",
          },
        },
      },
    },
  },
};
