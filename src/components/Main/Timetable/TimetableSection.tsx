import { useState } from "react";
import { gradeList, classList } from "./constant";
import useToDay from "../../../hooks/useToDay";
import getTimetable from "../../../apis/getTimetable";
import { getParamsType } from "../../../interfaces/timetable";
import Timetable from "./Timetable";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const TimetableSection = () => {
  const { toDay, toDayPlusFive } = useToDay();
  const [getParams, setGetParams] = useState<getParamsType>({
    grade: "1",
    class_num: "1",
    startAt: toDay,
    endAt: toDayPlusFive,
  });

  const onClickGetTimetable = () => {
    getTimetable(getParams);
  };

  return (
    <_Wrapper>
      <_DropdownLayout>
        <Dropdown list={gradeList} id="학년" onChange={onClickGetTimetable} />
        <Dropdown list={classList} id="반" onChange={onClickGetTimetable} />
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
