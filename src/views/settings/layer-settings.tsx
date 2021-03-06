import React, { useContext } from "react";
import {
  Box,
  Text,
  Divider,
  CheckboxGroup,
  Stack,
  Checkbox,
  CheckboxGroupContext,
} from "@chakra-ui/react";
import { AppContext } from "~/context";
import { setLayer } from "~/context/action";

const LayerSettings = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Box mb="5">
      <Box mb="3">
        <Text fontSize="lg" mb="3">
          Layer
        </Text>

        <Divider />
      </Box>

      <CheckboxGroup
        defaultValue={state?.layer}
        onChange={(layer: string[]): void => dispatch(setLayer(layer))}
      >
        <Stack spacing={3} direction="column">
          <Checkbox value="batas_prov">Batas Provinsi</Checkbox>
          <Checkbox value="batas_kab">Batas Kab</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default LayerSettings;
