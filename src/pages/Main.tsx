import React from "react";
import Timetable from "../components/Main/Timetable";
import styled from "styled-components";

const Main = () => {
  return (
    <_Wrapper>
      <Timetable />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default Main;
