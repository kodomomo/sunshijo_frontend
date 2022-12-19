import React from "react";
import Arrow from "../../assets/svgs/Arrow";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <_Dropdown>
      <span>1</span>
      <Arrow direction={false} />
    </_Dropdown>
  );
};

const _Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 15px;
  width: 100%;
  max-width: 160px;
  height: 42px;

  span {
    font-weight: 500;
    font-size: 16px;
    color: #242424;
  }
`;

export default Dropdown;
