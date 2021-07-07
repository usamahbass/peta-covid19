import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import { useMap } from "react-leaflet";
import { Settings as SettingsIcon, MapPin, User } from "react-feather";
import { useDisclosure } from "@chakra-ui/hooks";
import { LeafletControl } from "~/components";
import ModalSettings from "./modal-settings";
import { AppContext } from "~/context";
import { Stack } from "@chakra-ui/layout";
import { setPosition } from "~/context/action";
import DrawerUser from "./drawer-user";

export const LayerRight = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: onOpenUser,
    isOpen: isOpenUser,
    onClose: onCloseUser,
  } = useDisclosure();
  const { state, dispatch } = useContext(AppContext);

  const map = useMap();

  const findLocation = () => {
    map.locate().on("locationfound", function (e) {
      dispatch(setPosition(e.latlng));
      map.flyTo(e.latlng, 10, {
        animate: true,
      });
    });
  };

  return (
    <>
      <LeafletControl>
        <Stack spacing={3} direction="column">
          <Tooltip label="Pengaturan" placement="left-start" hasArrow>
            <IconButton
              aria-label="Pengaturan"
              rounded="xl"
              onClick={onOpen}
              icon={<SettingsIcon />}
            />
          </Tooltip>

          <Tooltip label="Lokasi" placement="left-start" hasArrow>
            <IconButton
              aria-label="Lokasi"
              rounded="xl"
              onClick={findLocation}
              icon={<MapPin />}
            />
          </Tooltip>

          {state?.position && (
            <Tooltip label="Kamu" placement="left-start" hasArrow>
              <IconButton aria-label="Lokasi" rounded="xl" onClick={onOpenUser} icon={<User />} />
            </Tooltip>
          )}
        </Stack>
      </LeafletControl>

      <ModalSettings onClose={onClose} isOpen={isOpen} />
      <DrawerUser onClose={onCloseUser} isOpen={isOpenUser} />
    </>
  );
};
