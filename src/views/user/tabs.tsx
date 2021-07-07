import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import HereImages from "~/assets/jpg/here.jpeg";
import AreaMe from "./area-me";
import Statistic from "../tabs/statistic";
import Hospitals from "../tabs/hospitals";

const TabsUser = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="primary" isLazy>
      <TabList mb="3" as={PerfectScrollbar}>
        <Tab>Daerah Kamu</Tab>
        <Tab>Covid19</Tab>
        <Tab>RS Rujukan Terdekat</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p="0" pt="3">
          <Image src={HereImages} mb="5" />
          <AreaMe />
        </TabPanel>
        <TabPanel>
          <Statistic user />
        </TabPanel>
        <TabPanel>
          <Hospitals user />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsUser;
