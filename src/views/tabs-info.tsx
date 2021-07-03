import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Statistic from "./tabs/statistic";
import Diagram from "./tabs/diagram";

const TabsInfo = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="primary" isLazy>
      <TabList mb="3">
        <Tab>Statistik</Tab>
        <Tab>Diagram</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Statistic />
        </TabPanel>

        <TabPanel>
          <Diagram />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsInfo;
