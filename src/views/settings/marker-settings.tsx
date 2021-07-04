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
