import React from "react";
import { gradeList, classList } from "./constant";
import Timetable from "./Timetable";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const TimetableSection = () => {
  return (
    <_Wrapper>
      <_DropdownLayout>
        <Dropdown list={gradeList} />
        <Dropdown list={classList} />
      </_DropdownLayout>
      <Timetable />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const _DropdownLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default TimetableSection;
