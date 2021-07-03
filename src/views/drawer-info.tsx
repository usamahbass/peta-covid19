import React, { useContext } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  Heading,
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
  const [context] = useContext(AppContext);

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md">
      <DrawerContent>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md">Provinsi {context?.dataInfo?.key}</Heading>
          <ThemeToggle />
        </DrawerHeader>
        <Divider />
        <DrawerBody mt="4" as={PerfectScrollbar}>
          <TabsInfo />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerInfo;
