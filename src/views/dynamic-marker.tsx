import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { v4 as uuidv4 } from "uuid";
import { ProvModel } from "~/models";
import { PROV_DATA } from "~/config";
import DrawerInfo from "./drawer-info";
import MarkerSwitch from "./marker-switch";

export const DynamicMarker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {PROV_DATA?.list_data?.map((el) => {
        if (el.lokasi) {
          return <MarkerSwitch key={uuidv4()} el={el} onOpen={onOpen} />;
        }
      })}
      <DrawerInfo isOpen={isOpen} onClose={onClose} />
    </>
  );
};
