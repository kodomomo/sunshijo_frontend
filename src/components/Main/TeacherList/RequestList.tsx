import styled from "styled-components";
import Triangle from "../../../assets/svgs/Triangle.svg";

const RequestList = () => {
  return (
    <_Wrapper>
      <img src={Triangle} />
      <_ListBox></_ListBox>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2px;

  img {
    z-index: 1;
  }
`;

const _ListBox = styled.div`
  width: 450px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px -4px 10px rgba(81, 81, 81, 0.25);
  border-radius: 10px;
`;

export default RequestList;
