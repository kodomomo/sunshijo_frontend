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
        (검정) : 변경을 하려는 과목 <span>(노랑)</span> : 변경을 원하는 과목
      </_IntroduceText>
      <table>
        <_NumberTh></_NumberTh>
        <_Th>월</_Th>
        <_Th>화</_Th>
        <_Th>수</_Th>
        <_Th>목</_Th>
        <_Th>금</_Th>
        <tr>
          <_NumberTd>1</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
        <tr>
          <_NumberTd>2</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
        <tr>
          <_NumberTd>3</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
        <tr>
          <_NumberTd>4</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
        <tr>
          <_NumberTd>{""}</_NumberTd>
          <_LunchTd colSpan={5}>점심시간</_LunchTd>
        </tr>
        <tr>
          <_NumberTd>5</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
        <tr>
          <_NumberTd>6</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
        <tr>
          <_NumberTd>7</_NumberTd>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
          <_Td>국어</_Td>
        </tr>
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

  span {
    color: #fed267;
  }
`;

const _Th = styled.th`
  width: 70px;
  line-height: 50px;
  font-weight: 600;
  font-size: 20px;
  background-color: #ffffff;
  color: #7b7b7b;
`;

const _Td = styled.td`
  cursor: pointer;
  transition: all 0.3s;
  width: 68px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  font-weight: 500;
  font-size: 18px;
  color: #242424;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const _NumberTh = styled.th`
  width: 30px;
  height: 50px;
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
