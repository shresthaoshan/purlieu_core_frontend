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
      {/* <DashBoardContent> */}
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
      {/* <SideBarSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          porro ullam voluptatem dolores voluptatibus officiis voluptas quos
          exercitationem perferendis vel iure fugit, pariatur nisi expedita ut
          odit, assumenda vero modi!
        </SideBarSection> */}
      {/* <SideBarContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
          vitae modi esse, est commodi quo explicabo illo inventore, asperiores
          harum deleniti, numquam aliquid cumque minima iusto? Quisquam, itaque
          inventore?
        </SideBarContent> */}
      {/* </DashBoardContent> */}
    </DashBoardContainer>
  );
};
