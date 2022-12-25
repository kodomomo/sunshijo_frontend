import { useState } from "react";
import { changeTimetableType } from "../../../interfaces/timetable";
import useShow from "../../../hooks/useShow";
import styled from "styled-components";
import List from "./List";
import Notification from "../../../assets/svgs/Notification.svg";
import Triangle from "../../../assets/svgs/Triangle.svg";

const TeacherFunction = () => {
  const [requestList, setRequestList] = useState<changeTimetableType[]>([]);
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
        {isShow && (
          <_RequestList>
            <img src={Triangle} />
            <_ListBox>
              {requestList.length == 0 ? (
                <_NoRequest>요청이 없습니다</_NoRequest>
              ) : (
                requestList.map((item, index) => {
                  return <List item={item} key={index} />;
                })
              )}
            </_ListBox>
          </_RequestList>
        )}
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

const _RequestList = styled.div`
  z-index: 2;
  position: absolute;
  top: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2px;

  img {
    z-index: 1;
  }
`;

const _ListBox = styled.div`
  cursor: default;
  width: 450px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px -4px 10px rgba(81, 81, 81, 0.25);
  border-radius: 10px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const _NoRequest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 20px;
  color: #686868;
`;

export default TeacherFunction;
