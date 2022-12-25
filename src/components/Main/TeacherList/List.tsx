import styled from "styled-components";
import Change from "../../../assets/svgs/Change.svg";

const List = () => {
  return (
    <_Wrapper>
      <h3>손지원 선생님께서 시간표 변경을 요청하셨습니다</h3>
      <p>2022-12-19 (월) 1교시 수학</p>
      <img src={Change} />
      <p>2022-12-21 (수) 5교시 운동과 건강</p>
      <_ButtonLayout>
        <_Button background="#FED267">수락</_Button>
        <_Button background="#242424">취소</_Button>
      </_ButtonLayout>
    </_Wrapper>
  );
};

const _Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  width: 435px;
  padding-left: 15px;
  height: 160px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 600;
    font-size: 15px;
    color: #242424;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    color: #7a7a7a;
  }
`;

const _ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

interface buttonProps {
  background: string;
}

const _Button = styled.button<buttonProps>`
  cursor: pointer;
  width: 80px;
  height: 32px;
  background: ${(props) => props.background};
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  border: none;
`;

export default List;
