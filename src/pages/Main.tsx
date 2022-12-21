import React from "react";
import TimetableSection from "../components/Main/Timetable/TimetableSection";
import TeacherListSection from "../components/Main/TeacherList/TeacherListSection";
import styled from "styled-components";

const Main = () => {
  return (
    <_Wrapper>
      <TimetableSection />
      <TeacherListSection />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default Main;
