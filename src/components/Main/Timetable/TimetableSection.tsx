import { useEffect, useState } from "react";
import { gradeList, classList } from "./constant";
import useToDay from "../../../hooks/useToDay";
import getTimetable from "../../../apis/getTimetable";
import { getParamsType, timetableType } from "../../../interfaces/timetable";
import Timetable from "./Timetable";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const TimetableSection = () => {
  const { toDay, toDayPlusFive } = useToDay();
  const [timetable, setTimetable] = useState<timetableType>({});
  const [getParams, setGetParams] = useState<getParamsType>({
    grade: "1",
    class_num: "1",
    startAt: toDay,
    endAt: toDayPlusFive,
  });

  //Object.keys(strObj).map(item => strObj[item])
  useEffect(() => {
    getTimetable(getParams);
  }, []);

  useEffect(() => {
    getTimetable(getParams);
  }, [getParams]);

  return (
    <_Wrapper>
      <_DropdownLayout>
        <Dropdown
          list={gradeList}
          id="학년"
          onChange={(state) => setGetParams({ ...getParams, grade: state })}
        />
        <Dropdown
          list={classList}
          id="반"
          onChange={(state) => setGetParams({ ...getParams, class_num: state })}
        />
      </_DropdownLayout>
      <Timetable timetable={timetable} />
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
