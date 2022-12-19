import React from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Timetable = () => {
  return (
    <_TimetableLayout>
      <_DropdownLayout>
        <Dropdown />
        <Dropdown />
      </_DropdownLayout>
    </_TimetableLayout>
  );
};

const _TimetableLayout = styled.div`
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

export default Timetable;
