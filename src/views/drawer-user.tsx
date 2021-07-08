import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  Heading,
  IconButton,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Info } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ThemeToggle } from "~/components";
import TabsUser from "./user/tabs";

interface DrawerUserProps {
  isOpen: boolean;
  onClose: () => void | Function;
}

const DrawerUser = ({ isOpen, onClose }: DrawerUserProps) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md">
      <DrawerContent>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md">Informasi Lokasi Kamu Saat Ini</Heading>
          <Box>
            <Popover>
              <PopoverTrigger>
                <IconButton aria-label="info" variant="ghost" icon={<Info />} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Info</PopoverHeader>
                <PopoverBody fontSize="1rem">
                  Data di bawah ini diambil dari provinsi lokasi kamu sekarang.
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <ThemeToggle />
            <DrawerCloseButton />
          </Box>
        </DrawerHeader>
        <Divider />
        <DrawerBody mt="4" as={PerfectScrollbar}>
          <TabsUser />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerUser;
