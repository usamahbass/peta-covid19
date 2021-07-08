import React, { useContext, useState } from "react";
import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import { AppContext } from "~/context";
import { InfoIcon } from "@chakra-ui/icons";

const AreaMe = () => {
  const { state } = useContext(AppContext);
  const [geospasialInfo, setGeoSpasialInfo] = useState<boolean>(false);

  return (
    <Box>
      <Heading fontSize="2xl">{state.userArea?.address?.village}</Heading>

      <Box mt="3">
        <Text mb="1">
          Kabupaten&nbsp;
          {state.userArea?.address?.town || state.userArea.address.county}
        </Text>
        <Text mb="1">{state.userArea?.address?.state}</Text>
        <Text>{state.userArea?.address?.country}</Text>
      </Box>

      {geospasialInfo && (
        <Box mt="3">
          <Divider mt="3" mb="3" />

          <Box mb="2">
            <Text>Kode pos:</Text>
            <Text>{state.userArea.address.postcode}</Text>
          </Box>

          <Box mb="2">
            <Text>Koordinat:</Text>
            <Text>
              {state.userArea.lat}, {state.userArea.lon}
            </Text>
          </Box>

          <Box mb="2">
            <Text>Kategori:</Text>
            <Text>{state.userArea.category}</Text>
          </Box>

          <Box mb="2">
            <Text>Tipe jalan:</Text>
            <Text>{state.userArea.addresstype}</Text>
          </Box>

          <Box mb="2">
            <Text>Kotak pembatas:</Text>
            <Text>{state.userArea.boundingbox}</Text>
          </Box>

          <Box mb="2">
            <Text>Lisensi:</Text>
            <Text>{state.userArea.licence}</Text>
          </Box>
        </Box>
      )}

      <Button
        display="flex"
        mx="auto"
        mt="3"
        colorScheme="info"
        variant="outline"
        onClick={() => setGeoSpasialInfo(!geospasialInfo)}
        rightIcon={<InfoIcon />}
      >
        {geospasialInfo ? "Cuitkan" : "Tampilkan lebih banyak info"}
      </Button>
    </Box>
  );
};

export default AreaMe;
