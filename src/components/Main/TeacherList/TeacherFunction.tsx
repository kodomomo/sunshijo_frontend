import styled from "styled-components";

const TeacherFunction = () => {
  return (
    <_Wrapper>
      <_Button background="#242424">수행평가 등록</_Button>
      <_Button background="#FED267">시간표 변경</_Button>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface ButtonProps {
  background: string;
}

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

export default TeacherFunction;
