import React from "react";
import styled from "styled-components";

export const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas,
        iste neque accusamus ratione cumque consequuntur sapiente incidunt quam
        quis quia dolorum eligendi quaerat ipsam? Reiciendis sapiente tenetur
        eaque illum?
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
