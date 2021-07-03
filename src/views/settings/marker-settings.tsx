import React, { useContext } from "react";
import { Box, Text, RadioGroup, Stack, Radio, Divider } from "@chakra-ui/react";
import { AppContext } from "~/context";

const MarkerSettings = () => {
  const [context, setContext] = useContext(AppContext);
  return (
    <Box mb="5">
      <Box mb="3">
        <Text fontSize="lg" mb="3">
          Tipe Marker
        </Text>

        <Divider />
      </Box>

      <RadioGroup
        defaultValue={context?.markerType}
        onChange={(value) =>
          setContext((prevContext) => ({ ...prevContext, markerType: value }))
        }
      >
        <Stack spacing={3} direction="column">
          <Radio colorScheme="primary" value="circlemarker">
            Cirle Marker
          </Radio>

          <Radio colorScheme="primary" value="marker">
            Marker
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default MarkerSettings;
