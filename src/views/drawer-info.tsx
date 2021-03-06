import React, { useContext } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  Box,
  Heading,
  DrawerCloseButton,
} from "@chakra-ui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import TabsInfo from "./tabs-info";
import { ThemeToggle } from "~/components";
import { AppContext } from "~/context";

interface DrawerInfoProps {
  isOpen: boolean;
  onClose: () => void | Function;
}

const DrawerInfo = ({ isOpen, onClose }: DrawerInfoProps) => {
  const { state } = useContext(AppContext);

  return (
    <Drawer onClose={onClose} variant="alwaysOpen" isOpen={isOpen} size="md">
      <DrawerContent>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md">Provinsi {state?.dataInfo?.key}</Heading>
          <ThemeToggle mr="10" />
        </DrawerHeader>
        <DrawerCloseButton position="absolute" top="15" />
        <Divider />
        <DrawerBody mt="4" as={PerfectScrollbar}>
          <TabsInfo />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerInfo;
