import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  bg?: string;
  title?: string;
  stat?: string | number;
  icon?: ReactNode;
}

export const StatsCard = ({ bg, title, stat, icon }: StatsCardProps) => {
  return (
    <Stat
      py="5"
      mb="5"
      shadow="md"
      rounded="lg"
      bg={bg}
      px={{ base: 2, md: 4 }}
      borderColor={useColorModeValue("gray.800", "gray.500")}
    >
      <Flex justifyContent="space-between">
        <Box color="white" pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight="medium" isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize="2xl" fontWeight="medium">
            {stat}
          </StatNumber>
        </Box>
        <Box
          my="auto"
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};
