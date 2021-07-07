import React, { useContext } from "react";
import { Box, Text, RadioGroup, Stack, Radio, Divider } from "@chakra-ui/react";
import { AppContext } from "~/context";
import { setMarkerType } from "~/context/action";

const MarkerSettings = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Box mb="5">
      <Box mb="3">
        <Text fontSize="lg" mb="3">
          Tipe Marker
        </Text>

        <Divider />
      </Box>

      <RadioGroup
        defaultValue={state?.markerType}
        onChange={(value) => dispatch(setMarkerType(value))}
      >
        <Stack spacing={3} direction="column">
          <Radio colorScheme="primary" value="circlemarker">
            Circle Marker
          </Radio>

          <Radio colorScheme="primary" value="marker">
            Default Marker
          </Radio>

          <Radio colorScheme="primary" value="covid">
            Covid Marker
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default MarkerSettings;
