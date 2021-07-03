import React, { useContext } from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@chakra-ui/modal";
import { ThemeToggle } from "~/components";
import { Heading } from "@chakra-ui/layout";
import { AppContext } from "~/context";
import BaseMap from "./settings/base-map";
import MarkerSettings from "./settings/marker-settings";

interface ModalSettingProps {
  isOpen: boolean;
  onClose: () => void | Function;
}

const ModalSettings = ({ isOpen, onClose }: ModalSettingProps) => {
  const [context, setContext] = useContext(AppContext);
  return (
    <Modal size="full" onClose={onClose} isOpen={isOpen}>
      <ModalContent position="absolute" bottom="-60px" minH="60vh">
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md">Pengaturan</Heading>
          <ThemeToggle />
        </ModalHeader>

        <ModalBody>
          <BaseMap />

          <MarkerSettings />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSettings;
