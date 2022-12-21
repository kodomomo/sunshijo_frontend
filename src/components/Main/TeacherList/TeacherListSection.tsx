import styled from "styled-components";
import TeacherFunction from "./TeacherFunction";
import TeacherList from "./TeacherList";

const TeacherListSection = () => {
  return (
    <_Wrapper>
      <TeacherFunction />
      <_TeacherListBox>
        <TeacherList />
      </_TeacherListBox>
    </_Wrapper>
  );
};

const _TeacherListBox = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 600px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-right: 50px;
`;

export default TeacherListSection;
