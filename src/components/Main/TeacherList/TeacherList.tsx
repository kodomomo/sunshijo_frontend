import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { teacherType } from "../../../interfaces/teacherList";

interface propsType {
  checkTeacher: string;
  setCheckTeacher: Dispatch<SetStateAction<string>>;
  item: teacherType;
}

const TeacherList = ({ item, checkTeacher, setCheckTeacher }: propsType) => {
  const changeCheckTeacher = () => {
    setCheckTeacher(item.teacher_id);
  };

  return (
    <_Wrapper onClick={changeCheckTeacher}>
      <_RadioButton isCheck={checkTeacher == item.teacher_id}>
        <div />
      </_RadioButton>
      <_TextLayout>
        <h1>{item.name}</h1>
        <div />
        <h2>{item.subject}</h2>
      </_TextLayout>
      <_TeacherWorkspace>{item.work_place}</_TeacherWorkspace>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;

  &:hover {
    background: #f5f5f5;
  }
`;

interface radioButtonProps {
  isCheck: boolean;
}

const _RadioButton = styled.div<radioButtonProps>`
  position: absolute;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 100px;
  border: ${(props) =>
    props.isCheck ? "2px #242424 solid" : "2px #818181 solid"};

  div {
    opacity: ${(props) => (props.isCheck ? 1 : 0)};
    width: 14px;
    height: 14px;
    border-radius: 50px;
    background-color: #242424;
  }
`;

const _TextLayout = styled.div`
  position: absolute;
  left: 60px;
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-weight: 600;
    font-size: 17px;
    color: #242424;
  }

  h2 {
    font-weight: 600;
    font-size: 17px;
    color: #7a7a7a;
  }

  div {
    width: 1px;
    height: 12px;
    background: #e8e8e8;
    border-radius: 10px;
  }
`;

const _TeacherWorkspace = styled.p`
  position: absolute;
  right: 20px;
  font-weight: 600;
  font-size: 17px;
  text-align: right;
  color: #7a7a7a;
`;

export default TeacherList;
