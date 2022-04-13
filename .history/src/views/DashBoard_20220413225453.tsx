import React, { useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Account } from "./TabPanels/Account";
import { Credentials } from "./TabPanels/Credentials";
import { DeleteAcc } from "./TabPanels/DeleteAcc";
import {
  DashBoardContainer,
  STab,
  STabList,
  STabPanel,
  STabs,
  TabContents,
} from "./styles/styles";

export const DashBoard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <DashBoardContainer>
      <STabs
        selectedIndex={tabIndex}
        onSelect={(index: any) => {
          setTabIndex(index);
          console.log(index);
        }}
      >
        <STabList>
          <STab isTrue={tabIndex === 0 ? true : false}>Account</STab>
          <STab isTrue={tabIndex === 1 ? true : false}>Credentials</STab>
          <STab isTrue={tabIndex === 2 ? true : false}>Delete Account</STab>
        </STabList>
        <TabContents>
          <STabPanel>
            <Account />
          </STabPanel>
          <STabPanel>
            <Credentials />
          </STabPanel>
          <STabPanel>
            <DeleteAcc />
          </STabPanel>
        </TabContents>
      </STabs>
    </DashBoardContainer>
  );
};
