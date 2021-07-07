import React, { useContext } from "react";
import {
  Box,
  Spinner,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MapPin as AddressIcon, Phone as PhoneIcon } from "react-feather";
import { AppContext } from "~/context";
import { useAxios } from "~/hooks";
import type { HospitalsProps } from "~/models";
import { nullChecker } from "~/utils";

interface HospitalProps {
  user?: boolean;
}

const Hospitals = ({ user }: HospitalProps) => {
  const {
    data,
    loading,
    error,
  }: { data: HospitalsProps; loading: boolean; error: boolean } = useAxios(
    "/dekontaminasi/hospitals",
    "dekontaminasi"
  );
  const { state } = useContext(AppContext);

  const hospitals =
    data && user
      ? data?.filter((el) => el.province === state.userArea.address.state)
      : data?.filter(
          (el) => el?.province.toUpperCase() === state?.dataInfo?.key
        );

  if (loading) {
    return <Spinner display="block" mx="auto" mt="5" />;
  }

  if (error) {
    return <Text align="left">maaf, server error.</Text>;
  }

  if (hospitals?.length <= 0) {
    return (
      <Text align="left">
        maaf kami belum menemukan rumah sakit rujukan disini.
      </Text>
    );
  }

  return (
    <Box color="white">
      {hospitals?.map((el) => (
        <Stat
          bg="info.500"
          py="5"
          mb="5"
          shadow="md"
          rounded="lg"
          px={{ base: 2, md: 4 }}
          borderColor={useColorModeValue("gray.800", "gray.500")}
        >
          <StatNumber fontSize="xl" mb="3">
            {el?.name}
          </StatNumber>
          <StatHelpText display="flex" alignItems="center">
            <AddressIcon size="1.5rem" />
            <Text fontSize="sm" ml="2">
              {el?.address}, {el?.region}.
            </Text>
          </StatHelpText>

          <StatHelpText display="flex" alignItems="center">
            <PhoneIcon size="1.25rem" />
            <Text ml="2">{nullChecker(el?.phone)}</Text>
          </StatHelpText>
        </Stat>
      ))}
    </Box>
  );
};

export default Hospitals;
