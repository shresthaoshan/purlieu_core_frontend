import React from "react";
import styled from "styled-components";

export const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardContent>
        <SideBarSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          porro ullam voluptatem dolores voluptatibus officiis voluptas quos
          exercitationem perferendis vel iure fugit, pariatur nisi expedita ut
          odit, assumenda vero modi!
        </SideBarSection>
        <SideBarContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
          vitae modi esse, est commodi quo explicabo illo inventore, asperiores
          harum deleniti, numquam aliquid cumque minima iusto? Quisquam, itaque
          inventore?
        </SideBarContent>
      </DashBoardContent>
    </DashBoardContainer>
  );
};

export const DashBoardContainer = styled.div`
  padding: 3rem 0 4rem 0;
  width: 95%;
  margin: auto;
`;
export const DashBoardContent = styled.div`
  display: flex;
`;
export const SideBarSection = styled.div`
  /* display: flex; */
`;
export const SideBarContent = styled.div`
  /* display: flex; */
`;
