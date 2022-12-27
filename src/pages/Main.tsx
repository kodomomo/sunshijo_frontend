import { useState } from "react";
import TimetableSection from "../components/Main/Timetable/TimetableSection";
import TeacherListSection from "../components/Main/TeacherList/TeacherListSection";
import { recordsType } from "../interfaces/timetable";
import styled from "styled-components";

const Main = () => {
  const [recordsState, setRecordsState] = useState<recordsType>({
    origin_grade: "",
    origin_class: "",
    origin_subject: "",
    origin_date: "",
    origin_gradations: "",
    new_grade: "",
    new_class: "",
    new_date: "",
    new_subject: "",
    new_gradations: "",
    new_teacher_id: "",
  });

  return (
    <_Wrapper>
      <TimetableSection
        setRecordsState={setRecordsState}
        recordsState={recordsState}
      />
      <TeacherListSection
        recordsState={recordsState}
        setRecordsState={setRecordsState}
      />
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
