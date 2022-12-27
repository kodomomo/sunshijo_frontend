import styled from "styled-components";
import { listType } from "../../interfaces/records";
import changeRow from "../../assets/svgs/ChangeRow.svg";

interface propsType {
  item: listType;
}

const List = ({ item }: propsType) => {
  const {
    new_class,
    new_day,
    new_gradations,
    new_grade,
    new_name,
    new_teacher_name,
    origin_class,
    origin_day,
    origin_gradations,
    origin_grade,
    origin_name,
    origin_teacher_name,
    record_id,
  } = item;

  const originText = `${origin_day} ${origin_grade}학년 ${origin_class}반 ${origin_gradations}교시 ${origin_name} (${origin_teacher_name})`;
  const newText = `${new_day} ${new_grade}학년 ${new_class}반 ${new_gradations}교시 ${new_name} (${new_teacher_name})`;

  return (
    <_Wrapper>
      <p>{originText}</p>
      <img src={changeRow} />
      <p>{newText}</p>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 675px;
  height: 80px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-bottom: 1px solid #e8e8e8;
  p {
    font-weight: 500;
    font-size: 17px;
    color: #7a7a7a;
  }
`;

export default List;
