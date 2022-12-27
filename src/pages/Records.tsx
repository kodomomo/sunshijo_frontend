import { useState } from "react";
import useInput from "../hooks/useInput";
import { paramsType, listType } from "../interfaces/records";
import getChangeRecords from "../apis/getChangeRecords";
import styled from "styled-components";
import List from "../components/Records/List";

const Records = () => {
  const [list, setList] = useState<listType[]>([]);
  const [data, setData, handler] = useInput<paramsType>({
    startAt: "",
    endAt: "",
  });

  const onClickGetChangeRecords = () => {
    getChangeRecords(data).then((res) => {
      setList(res.data);
    });
  };

  return (
    <_Wrapper>
      <_Container>
        <_TitleLayout>
          <h1>시간표 변경 기록</h1>
          <div>
            <_ScheduleInput
              onChange={handler}
              name="startAt"
              placeholder="시작일 ex) 2022-12-30"
            />
            <_ScheduleInput
              onChange={handler}
              name="endAt"
              placeholder="마감일 ex) 2022-12-30"
            />
            <_Button onClick={onClickGetChangeRecords}>확인</_Button>
          </div>
        </_TitleLayout>
        <_ListBox>
          {list.map((item, index) => {
            return <List item={item} />;
          })}
        </_ListBox>
      </_Container>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const _TitleLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 22px;
    color: #242424;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

const _ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const _ScheduleInput = styled.input`
  width: 215px;
  height: 40px;
  padding-left: 15px;
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 5px;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #9e9e9e;
  }
`;

const _Button = styled.button`
  width: 60px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  background: #fed267;
  border: none;
  border-radius: 5px;
`;

export default Records;
