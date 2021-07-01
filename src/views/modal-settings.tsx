import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";

interface ModalSettingProps {
  isOpen: boolean;
  onClose: () => void | Function;
}

const ModalSettings = ({ isOpen, onClose }: ModalSettingProps) => {
  return (
    <Modal size="full" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent position="absolute" bottom="-60px" minH="60vh">
        <ModalHeader>Pengaturan</ModalHeader>

        <ModalBody>Haloo</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSettings;
