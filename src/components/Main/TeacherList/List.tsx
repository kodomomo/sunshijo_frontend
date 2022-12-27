import styled from "styled-components";
import Change from "../../../assets/svgs/Change.svg";
import putRecord from "../../../apis/putRecord";
import { changeTimetableType } from "../../../interfaces/timetable";

interface propsType {
  item: changeTimetableType;
}

const List = ({ item }: propsType) => {
  const {
    name,
    new_class,
    new_day,
    new_gradations,
    new_grade,
    new_name,
    origin_class,
    origin_day,
    origin_gradations,
    origin_grade,
    origin_name,
    record_id,
  } = item;

  const originText = `${origin_day} ${origin_grade}학년 ${origin_class}반 ${origin_gradations}교시 ${origin_name}`;
  const newText = `${new_day} ${new_grade}학년 ${new_class}반 ${new_gradations}교시 ${new_name}`;

  const onClickPostRecord = (result: boolean) => {
    putRecord({
      record_id: record_id,
      react: result,
    });
  };

  return (
    <_Wrapper>
      <h3>{name} 선생님께서 시간표 변경을 요청하셨습니다</h3>
      <p>{originText}</p>
      <img src={Change} />
      <p>{newText}</p>
      <_ButtonLayout>
        <_Button background="#FED267" onClick={() => onClickPostRecord(true)}>
          수락
        </_Button>
        <_Button background="#242424" onClick={() => onClickPostRecord(false)}>
          취소
        </_Button>
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
