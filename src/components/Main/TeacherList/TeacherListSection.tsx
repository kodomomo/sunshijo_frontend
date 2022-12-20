import styled from "styled-components";
import TeacherFunction from "./TeacherFunction";
import TeacherList from "./TeacherList";

const TeacherListSection = () => {
  return (
    <_Wrapper>
      <TeacherFunction />
      <TeacherList />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-right: 50px;
`;

export default TeacherListSection;
