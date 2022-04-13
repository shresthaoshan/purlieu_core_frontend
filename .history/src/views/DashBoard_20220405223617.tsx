import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardContent>
        <Tabs>
          <TabList>
            <Tab>qd</Tab>
            <Tab>qd</Tab>
            <Tab>qd</Tab>
          </TabList>
          <TabPanel>dw</TabPanel>
          <TabPanel>wdwa</TabPanel>
          <TabPanel>dw</TabPanel>
        </Tabs>
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
      </DashBoardContent>
    </DashBoardContainer>
  );
};

export const DashBoardContainer = styled.div`
  width: 95%;
  margin: auto;
`;
export const DashBoardContent = styled.div`
  display: flex;
  /* padding: 3rem 0 4rem 0; */
`;
export const SideBarSection = styled.div`
  /* display: flex; */
  /* box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.3); */
  width: 20rem;
  /* box-shadow: 0 3px 6px rgba(40, 40, 40, 0.3); */
  box-shadow: 5px 0 2px -5px #333;
  padding: 3rem 0 4rem 0;
`;
export const SideBarContent = styled.div`
  /* display: flex; */
  padding: 3rem 0 4rem 0;

  /* box-shadow: inset 11px 4px 9px -15px rgba(0, 0, 0, 0.75); */
`;
