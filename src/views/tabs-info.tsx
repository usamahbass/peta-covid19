import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Statistic from "./tabs/statistic";
import Diagram from "./tabs/diagram";
import Hospitals from "./tabs/hospitals";

const TabsInfo = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="primary" isLazy>
      <TabList flexDirection={["column", "row"]} mb="3" as={PerfectScrollbar}>
        <Tab>Statistik</Tab>
        <Tab>Diagram</Tab>
        <Tab>RS Rujukan</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Statistic />
        </TabPanel>

        <TabPanel>
          <Diagram />
        </TabPanel>

        <TabPanel>
          <Hospitals />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsInfo;
