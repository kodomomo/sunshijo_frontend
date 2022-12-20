import React from "react";
import TimetableArrow from "../../../assets/svgs/TimetableArrow";
import styled from "styled-components";

const Timetable = () => {
  return (
    <_Wrapper>
      <_TitleLayout>
        <TimetableArrow direction="left" />
        <h1>이번주 시간표</h1>
        <TimetableArrow direction="right" />
      </_TitleLayout>
      <_IntroduceText>
        (검정) : 변경을 하려는 과목{" "}
        <span>(노랑)</span> : 변경을 원하는 과목
      </_IntroduceText>
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

  span {
    color: #fed267;
  }
`;

export default Timetable;
