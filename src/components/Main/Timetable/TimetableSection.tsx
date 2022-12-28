import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { gradeList, classList } from "./constant";
import useToDay from "../../../hooks/useToDay";
import getTimetable from "../../../apis/getTimetable";
import {
  getParamsType,
  timetableType,
  recordsType,
} from "../../../interfaces/timetable";
import Timetable from "./Timetable";
import Dropdown from "./Dropdown";
import styled from "styled-components";

interface propsType {
  recordsState: recordsType;
  setRecordsState: Dispatch<SetStateAction<recordsType>>;
}

const TimetableSection = ({ recordsState, setRecordsState }: propsType) => {
  const [plusNum, setPlusNum] = useState<number>(0);
  const { toDay, toDayPlusFive } = useToDay(plusNum);
  const [timetable, setTimetable] = useState<timetableType>({});
  const [getParams, setGetParams] = useState<getParamsType>({
    grade: "1",
    classNum: "1",
    startAt: toDay,
    endAt: toDayPlusFive,
  });

  useEffect(() => {
    if (
      localStorage.getItem("grade") != "" &&
      localStorage.getItem("classNum") != ""
    ) {
      setGetParams({
        grade: localStorage.getItem("grade") as string,
        classNum: localStorage.getItem("classNum") as string,
        startAt: toDay,
        endAt: toDayPlusFive,
      });
    }
    getTimetable(getParams).then((res) => {
      setTimetable(res.data);
    });
  }, []);

  useEffect(() => {
    setGetParams({
      grade: getParams.grade,
      classNum: getParams.classNum,
      startAt: toDay,
      endAt: toDayPlusFive,
    });
  }, [toDay]);

  useEffect(() => {
    getTimetable(getParams).then((res) => {
      setTimetable(res.data);
      localStorage.setItem("grade", getParams.grade);
      localStorage.setItem("classNum", getParams.classNum);
    });
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
          onChange={(state) => setGetParams({ ...getParams, classNum: state })}
        />
      </_DropdownLayout>
      <Timetable
        timetable={timetable}
        setPlusNum={setPlusNum}
        recordsState={recordsState}
        setRecordsState={setRecordsState}
      />
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
