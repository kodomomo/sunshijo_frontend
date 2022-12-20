import styled from "styled-components";

const TeacherList = () => {
  return (
    <_Wrapper>
      <_Teacher>
        <_TextLayout>
          <h1>손지원</h1>
          <div />
          <h2>수학</h2>
        </_TextLayout>
        <_TeacherWorkspace>본부교무실</_TeacherWorkspace>
      </_Teacher>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
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

const _Teacher = styled.div`
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
