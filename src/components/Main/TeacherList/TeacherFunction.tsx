import { useState } from "react";
import useShow from "../../../hooks/useShow";
import styled from "styled-components";
import RequestList from "./RequestList";
import Notification from "../../../assets/svgs/Notification.svg";

const TeacherFunction = () => {
  const { isShow, changeShow } = useShow();

  return (
    <_Wrapper>
      <_ButtonBox>
        <_Button background="#242424">수행평가 등록</_Button>
        <_Button background="#FED267">시간표 변경</_Button>
      </_ButtonBox>
      <_Notification onClick={changeShow}>
        <span />
        <img src={Notification} />
        {isShow && <RequestList />}
      </_Notification>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ButtonProps {
  background: string;
}

const _ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const _Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: 130px;
  height: 42px;
  background: ${(props) => props.background};
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  border: none;
`;

const _Notification = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  width: 38px;
  height: 38px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: none;

  span {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0px;
    top: 0px;
    background: #ff2c2c;
    border-radius: 10px;
  }
`;

export default TeacherFunction;
