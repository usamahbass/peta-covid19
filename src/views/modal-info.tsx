import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { ThemeToggle } from "~/components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalInfo = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="lg"
      closeOnOverlayClick={false}
    >
      <ModalContent>
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Tentang Peta Covid</Text>
          <ThemeToggle mr="5" />
          <ModalCloseButton />
        </ModalHeader>

        <Divider />

        <ModalBody mt="3" mb="3">
          <Box mb="5">
            <Heading size="md" mb="3">
              API
            </Heading>

            <Box mb="2">
              <Text>
                Data Covid19:
                <Link
                  ml="2"
                  href="https://data.covid19.go.id/public/api/prov.json"
                  target="blank"
                >
                  https://data.covid19.go.id/public/api/prov.json
                </Link>
              </Text>
            </Box>

            <Box mb="2">
              <Text>
                Dekontaminasi:
                <Link ml="2" href="https://dekontaminasi.com" target="blank">
                  https://dekontaminasi.com
                </Link>
              </Text>
            </Box>

            <Box mb="2">
              <Text>
                Geocoding:
                <Link
                  ml="2"
                  href="https://nominatim.openstreetmap.org"
                  target="blank"
                >
                  https://nominatim.openstreetmap.org
                </Link>
              </Text>
            </Box>
          </Box>

          <Box mb="5">
            <Heading size="md" mb="3">
              DATA
            </Heading>

            <Box mb="2">
              <Text>
                GeoJSON Provinsi:
                <Link
                  ml="2"
                  href="https://github.com/superpikar/indonesia-geojson"
                  target="blank"
                >
                  https://github.com/superpikar/indonesia-geojson
                </Link>
              </Text>
            </Box>

            <Box mb="2">
              <Text>
                GeoJSON Kab:
                <Link
                  ml="2"
                  href="https://github.com/rifani/geojson-political-indonesia"
                  target="blank"
                >
                  https://github.com/rifani/geojson-political-indonesia
                </Link>
              </Text>
            </Box>
          </Box>

          <Box>
            <Heading size="md">Source Code</Heading>

            <Text mt="3">
              <Link
                href="https://github.com/usamahbass/peta-covid19"
                target="blank"
              >
                https://github.com/usamahbass/peta-covid19
              </Link>
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalInfo;
