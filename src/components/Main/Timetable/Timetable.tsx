import { Dispatch, SetStateAction, useState } from "react";
import TimetableArrow from "../../../assets/svgs/TimetableArrow";
import { timetableType, periodType } from "../../../interfaces/timetable";
import styled from "styled-components";

interface propsType {
  timetable: timetableType;
  setPlusNum: Dispatch<SetStateAction<number>>;
  setRecordsState: any;
  recordsState: any;
}

type timetableStateType = "저번주" | "이번주" | "다음주";

const Timetable = ({
  timetable,
  setPlusNum,
  setRecordsState,
  recordsState,
}: propsType) => {
  const [originTime, setOriginTime] = useState<periodType>({
    day_at: "",
    class_num: "",
    name: "",
    gradations: "",
    grade: "",
    week_of_day: "",
  });
  const [newTime, setNewTime] = useState<periodType>({
    day_at: "",
    class_num: "",
    name: "",
    gradations: "",
    grade: "",
    week_of_day: "",
  });
  const [timetableState, setTimetableState] =
    useState<timetableStateType>("이번주");

  const prevNum = () => {
    if (timetableState == "다음주") {
      setPlusNum((num) => num - 7);
      setTimetableState("이번주");
    } else if (timetableState == "이번주") {
      setPlusNum((num) => num - 7);
      setTimetableState("저번주");
    }
  };

  const nextNum = () => {
    if (timetableState == "저번주") {
      setPlusNum((num) => num + 7);
      setTimetableState("이번주");
    } else if (timetableState == "이번주") {
      setPlusNum((num) => num + 7);
      setTimetableState("다음주");
    }
  };

  const refresh = () => {
    setOriginTime({
      day_at: "",
      class_num: "",
      name: "",
      gradations: "",
      grade: "",
      week_of_day: "",
    });
    setNewTime({
      day_at: "",
      class_num: "",
      name: "",
      gradations: "",
      grade: "",
      week_of_day: "",
    });
  };

  const selectTimetable = (day: string, index: number) => {
    if (!originTime.name) {
      switch (day) {
        case "mon":
          setOriginTime(timetable.mon?.[index] as periodType);
          break;
        case "tue":
          setOriginTime(timetable.tue?.[index] as periodType);
          break;
        case "wed":
          setOriginTime(timetable.wed?.[index] as periodType);
          break;
        case "thu":
          setOriginTime(timetable.thu?.[index] as periodType);
          break;
        case "fri":
          setOriginTime(timetable.fri?.[index] as periodType);
          break;
      }
    } else {
      switch (day) {
        case "mon":
          setNewTime(timetable.mon?.[index] as periodType);
          setRecordsState({
            origin_grade: originTime.grade,
            origin_class: originTime.class_num,
            origin_subject: originTime.name,
            origin_date: originTime.day_at,
            origin_gradations: originTime.gradations,
            new_grade: timetable.mon?.[index].grade,
            new_class: timetable.mon?.[index].class_num,
            new_date: timetable.mon?.[index].day_at,
            new_subject: timetable.mon?.[index].name,
            new_gradations: timetable.mon?.[index].gradations,
            new_teacher_id: recordsState.new_teacher_id,
          });
          break;
        case "tue":
          setNewTime(timetable.tue?.[index] as periodType);
          setRecordsState({
            origin_grade: originTime.grade,
            origin_class: originTime.class_num,
            origin_subject: originTime.name,
            origin_date: originTime.day_at,
            origin_gradations: originTime.gradations,
            new_grade: timetable.tue?.[index].grade,
            new_class: timetable.tue?.[index].class_num,
            new_date: timetable.tue?.[index].day_at,
            new_subject: timetable.tue?.[index].name,
            new_gradations: timetable.tue?.[index].gradations,
            new_teacher_id: recordsState.new_teacher_id,
          });
          break;
        case "wed":
          setNewTime(timetable.wed?.[index] as periodType);
          setRecordsState({
            origin_grade: originTime.grade,
            origin_class: originTime.class_num,
            origin_subject: originTime.name,
            origin_date: originTime.day_at,
            origin_gradations: originTime.gradations,
            new_grade: timetable.wed?.[index].grade,
            new_class: timetable.wed?.[index].class_num,
            new_date: timetable.wed?.[index].day_at,
            new_subject: timetable.wed?.[index].name,
            new_gradations: timetable.wed?.[index].gradations,
            new_teacher_id: recordsState.new_teacher_id,
          });
          break;
        case "thu":
          setNewTime(timetable.thu?.[index] as periodType);
          setRecordsState({
            origin_grade: originTime.grade,
            origin_class: originTime.class_num,
            origin_subject: originTime.name,
            origin_date: originTime.day_at,
            origin_gradations: originTime.gradations,
            new_grade: timetable.thu?.[index].grade,
            new_class: timetable.thu?.[index].class_num,
            new_date: timetable.thu?.[index].day_at,
            new_subject: timetable.thu?.[index].name,
            new_gradations: timetable.thu?.[index].gradations,
            new_teacher_id: recordsState.new_teacher_id,
          });
          break;
        case "fri":
          setNewTime(timetable.fri?.[index] as periodType);
          setRecordsState({
            origin_grade: originTime.grade,
            origin_class: originTime.class_num,
            origin_subject: originTime.name,
            origin_date: originTime.day_at,
            origin_gradations: originTime.gradations,
            new_grade: timetable.fri?.[index].grade,
            new_class: timetable.fri?.[index].class_num,
            new_date: timetable.fri?.[index].day_at,
            new_subject: timetable.fri?.[index].name,
            new_gradations: timetable.fri?.[index].gradations,
            new_teacher_id: recordsState.new_teacher_id,
          });
          break;
      }
    }
  };

  return (
    <_Wrapper>
      <_TitleLayout>
        <span onClick={prevNum}>
          <TimetableArrow direction="left" />
        </span>
        <h1>{timetableState} 시간표</h1>
        <span onClick={nextNum}>
          <TimetableArrow direction="right" />
        </span>
      </_TitleLayout>
      <_IntroduceText>
        (검정) : 변경을 하려는 과목 <span>(노랑)</span> : 변경을 원하는 과목{" "}
        <span style={{ fontSize: "20px", cursor: "pointer" }} onClick={refresh}>
          초기화
        </span>
      </_IntroduceText>
      <table>
        <thead>
          <_NumberTh></_NumberTh>
          <_Th>월</_Th>
          <_Th>화</_Th>
          <_Th>수</_Th>
          <_Th>목</_Th>
          <_Th>금</_Th>
        </thead>
        <tbody>
          <tr>
            <_NumberTd>1</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 0)}
              current={
                timetable.mon?.[0] == originTime
                  ? "one"
                  : timetable.mon?.[0] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[0]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 0)}
              current={
                timetable.tue?.[0] == originTime
                  ? "one"
                  : timetable.tue?.[0] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[0]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 0)}
              current={
                timetable.wed?.[0] == originTime
                  ? "one"
                  : timetable.wed?.[0] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[0]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 0)}
              current={
                timetable.thu?.[0] == originTime
                  ? "one"
                  : timetable.thu?.[0] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[0]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 0)}
              current={
                timetable.fri?.[0] == originTime
                  ? "one"
                  : timetable.fri?.[0] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[0]?.name}
            </_Td>
          </tr>
          <tr>
            <_NumberTd>2</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 1)}
              current={
                timetable.mon?.[1] == originTime
                  ? "one"
                  : timetable.mon?.[1] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[1]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 1)}
              current={
                timetable.tue?.[1] == originTime
                  ? "one"
                  : timetable.tue?.[1] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[1]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 1)}
              current={
                timetable.wed?.[1] == originTime
                  ? "one"
                  : timetable.wed?.[1] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[1]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 1)}
              current={
                timetable.thu?.[1] == originTime
                  ? "one"
                  : timetable.thu?.[1] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[1]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 1)}
              current={
                timetable.fri?.[1] == originTime
                  ? "one"
                  : timetable.fri?.[1] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[1]?.name}
            </_Td>
          </tr>
          <tr>
            <_NumberTd>3</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 2)}
              current={
                timetable.mon?.[2] == originTime
                  ? "one"
                  : timetable.mon?.[2] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[2]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 2)}
              current={
                timetable.tue?.[2] == originTime
                  ? "one"
                  : timetable.tue?.[2] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[2]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 2)}
              current={
                timetable.wed?.[2] == originTime
                  ? "one"
                  : timetable.wed?.[2] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[2]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 2)}
              current={
                timetable.thu?.[2] == originTime
                  ? "one"
                  : timetable.thu?.[2] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[2]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 2)}
              current={
                timetable.fri?.[2] == originTime
                  ? "one"
                  : timetable.fri?.[2] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[2]?.name}
            </_Td>
          </tr>
          <tr>
            <_NumberTd>4</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 3)}
              current={
                timetable.mon?.[3] == originTime
                  ? "one"
                  : timetable.mon?.[3] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[3]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 3)}
              current={
                timetable.tue?.[3] == originTime
                  ? "one"
                  : timetable.tue?.[3] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[3]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 3)}
              current={
                timetable.wed?.[3] == originTime
                  ? "one"
                  : timetable.wed?.[3] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[3]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 3)}
              current={
                timetable.thu?.[3] == originTime
                  ? "one"
                  : timetable.thu?.[3] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[3]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 3)}
              current={
                timetable.fri?.[3] == originTime
                  ? "one"
                  : timetable.fri?.[3] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[3]?.name}
            </_Td>
          </tr>
          <tr>
            <_NumberTd>{""}</_NumberTd>
            <_LunchTd colSpan={5}>점심시간</_LunchTd>
          </tr>
          <tr>
            <_NumberTd>5</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 4)}
              current={
                timetable.mon?.[4] == originTime
                  ? "one"
                  : timetable.mon?.[4] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[4]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 4)}
              current={
                timetable.tue?.[4] == originTime
                  ? "one"
                  : timetable.tue?.[4] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[4]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 4)}
              current={
                timetable.wed?.[4] == originTime
                  ? "one"
                  : timetable.wed?.[4] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[4]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 4)}
              current={
                timetable.thu?.[4] == originTime
                  ? "one"
                  : timetable.thu?.[4] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[4]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 4)}
              current={
                timetable.fri?.[4] == originTime
                  ? "one"
                  : timetable.fri?.[4] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[4]?.name}
            </_Td>
          </tr>
          <tr>
            <_NumberTd>6</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 5)}
              current={
                timetable.mon?.[5] == originTime
                  ? "one"
                  : timetable.mon?.[5] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[5]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 5)}
              current={
                timetable.tue?.[5] == originTime
                  ? "one"
                  : timetable.tue?.[5] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[5]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 5)}
              current={
                timetable.wed?.[5] == originTime
                  ? "one"
                  : timetable.wed?.[5] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[5]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 5)}
              current={
                timetable.thu?.[5] == originTime
                  ? "one"
                  : timetable.thu?.[5] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[5]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 5)}
              current={
                timetable.fri?.[5] == originTime
                  ? "one"
                  : timetable.fri?.[5] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[5]?.name}
            </_Td>
          </tr>
          <tr>
            <_NumberTd>7</_NumberTd>
            <_Td
              onClick={() => selectTimetable("mon", 6)}
              current={
                timetable.mon?.[6] == originTime
                  ? "one"
                  : timetable.mon?.[6] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.mon?.[6]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("tue", 6)}
              current={
                timetable.tue?.[6] == originTime
                  ? "one"
                  : timetable.tue?.[6] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.tue?.[6]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("wed", 6)}
              current={
                timetable.wed?.[6] == originTime
                  ? "one"
                  : timetable.wed?.[6] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.wed?.[6]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("thu", 6)}
              current={
                timetable.thu?.[6] == originTime
                  ? "one"
                  : timetable.thu?.[6] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.thu?.[6]?.name}
            </_Td>
            <_Td
              onClick={() => selectTimetable("fri", 6)}
              current={
                timetable.fri?.[6] == originTime
                  ? "one"
                  : timetable.fri?.[6] == newTime
                  ? "two"
                  : "none"
              }
            >
              {timetable.fri?.[6]?.name}
            </_Td>
          </tr>
        </tbody>
      </table>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 430px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const _TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  h1 {
    font-weight: 600;
    font-size: 20px;
    color: #242424;
  }
`;

const _IntroduceText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #242424;
  text-align: center;

  span {
    color: #fed267;
  }
`;

const _Th = styled.th`
  width: 70px;
  line-height: 40px;
  font-weight: 600;
  font-size: 20px;
  background-color: #ffffff;
  color: #7b7b7b;
`;

interface tdPropsType {
  current: "one" | "two" | "none";
}

const _Td = styled.td<tdPropsType>`
  cursor: pointer;
  transition: all 0.3s;
  width: 68px;
  height: 48px;
  background: ${(props) =>
    props.current == "one"
      ? "#242424"
      : props.current == "two"
      ? "#FED267"
      : "#fffff"};
  border: 1px solid #e7e7e7;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => (props.current == "none" ? "#242424" : "#ffffff")};

  &:hover {
    background-color: ${(props) =>
      props.current == "one"
        ? "#242424"
        : props.current == "two"
        ? "#FED267"
        : "#fffff"};
  }
`;

const _NumberTh = styled.th`
  width: 30px;
  height: 40px;
`;

const _NumberTd = styled.td`
  width: 30px;
  height: 50px;
  font-weight: 400;
  font-size: 18px;
  color: #7b7b7b;
`;

const _LunchTd = styled.td`
  width: 350px;
  height: 50px;
  background: #fed267;
  border-color: #e7e7e7;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

export default Timetable;
