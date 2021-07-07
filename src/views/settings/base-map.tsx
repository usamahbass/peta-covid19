import React, { useContext } from "react";
import { Box, Text, RadioGroup, Stack, Radio, Divider } from "@chakra-ui/react";
import { AppContext } from "~/context";
import { setBaseMap } from "~/context/action";

const BaseMap = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Box mb="5">
      <Box mb="3">
        <Text fontSize="lg" mb="3">
          Base Map
        </Text>

        <Divider />
      </Box>

      <RadioGroup
        defaultValue={state?.basemap}
        onChange={(value) => dispatch(setBaseMap(value))}
      >
        <Stack spacing={3} direction="column">
          <Radio colorScheme="primary" value="googlemap">
            Google Map
          </Radio>

          <Radio colorScheme="primary" value="googlesatelite">
            Google Satelite
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default BaseMap;
