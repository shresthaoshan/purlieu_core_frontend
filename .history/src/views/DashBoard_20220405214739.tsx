import React from "react";
import styled from "styled-components";

export const DashBoard = () => {
  return (
    <DashBoardContainer>
      <DashBoardContent>loem</DashBoardContent>
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
