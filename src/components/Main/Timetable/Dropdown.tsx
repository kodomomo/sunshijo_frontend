import React from "react";
import Arrow from "../../../assets/svgs/Arrow";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <_Dropdown>
      <span>1학년</span>
      <Arrow direction={false} />
    </_Dropdown>
  );
};

const _Dropdown = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 15px;
  width: 135px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 5px;

  span {
    font-weight: 500;
    font-size: 16px;
    color: #242424;
  }
`;

export default Dropdown;
