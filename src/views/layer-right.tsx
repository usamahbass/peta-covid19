import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import { Settings as SettingsIcon } from "react-feather";
import { useDisclosure } from "@chakra-ui/hooks";
import { LeafletControl } from "~/components";
import ModalSettings from "./modal-settings";

export const LayerRight = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <LeafletControl>
        <Tooltip label="Pengaturan" placement="left-start" hasArrow>
          <IconButton
            aria-label="Pengaturan"
            rounded="xl"
            onClick={onOpen}
            icon={<SettingsIcon />}
          />
        </Tooltip>
      </LeafletControl>

      <ModalSettings onClose={onClose} isOpen={isOpen} />
    </>
  );
};
