import React from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@chakra-ui/modal";
import { ThemeToggle } from "~/components";
import { Heading } from "@chakra-ui/layout";
import PerfectScrollbar from "react-perfect-scrollbar";
import BaseMap from "./settings/base-map";
import MarkerSettings from "./settings/marker-settings";
import LayerSettings from "./settings/layer-settings";

interface ModalSettingProps {
  isOpen: boolean;
  onClose: () => void | Function;
}

const ModalSettings = ({ isOpen, onClose }: ModalSettingProps) => {
  return (
    <Modal size="full" onClose={onClose} isOpen={isOpen}>
      <ModalContent
        position="absolute"
        bottom="-60px"
        height="60vh"
        minH="auto"
      >
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md">Pengaturan</Heading>
          <ThemeToggle />
        </ModalHeader>

        <ModalBody overflow="auto" as={PerfectScrollbar}>
          <BaseMap />
          <MarkerSettings />
          <LayerSettings />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSettings;
