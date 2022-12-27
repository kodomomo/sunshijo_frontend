import { useEffect, useState } from "react";
import styled from "styled-components";
import TeacherFunction from "./TeacherFunction";
import TeacherList from "./TeacherList";
import getTeacherList from "../../../apis/getTeacherList";
import { teacherType } from "../../../interfaces/teacherList";

const TeacherListSection = () => {
  const [checkTeacher, setCheckTeacher] = useState<string>("");
  const [list, setList] = useState<teacherType[]>([]);

  useEffect(() => {
    getTeacherList().then((res) => {});
  }, []);

  return (
    <_Wrapper>
      <TeacherFunction />
      <_TeacherListBox>
        {list.map((item, index) => {
          return (
            <TeacherList
              item={item}
              key={index}
              setCheckTeacher={setCheckTeacher}
              checkTeacher={checkTeacher}
            />
          );
        })}
      </_TeacherListBox>
    </_Wrapper>
  );
};

const _TeacherListBox = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-right: 50px;
`;

export default TeacherListSection;
