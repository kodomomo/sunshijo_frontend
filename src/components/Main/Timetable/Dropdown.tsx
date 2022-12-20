import React from "react";
import Arrow from "../../../assets/svgs/Arrow";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <_Dropdown>
      <span>1학년</span>
      <Arrow direction={false} />
      <_MenuBox>
        <div>1학년</div>
      </_MenuBox>
    </_Dropdown>
  );
};

const _Dropdown = styled.div`
  position: relative;
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

const _MenuBox = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 47px;
  left: 0px;
  right: 0px;
  width: 160px;
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 5px;

  div {
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #242424;
    padding-left: 15px;
    display: flex;
    width: 145px;
    height: 40px;
    border-bottom: 1px solid #e8e8e8;
    background-color: #ffffff;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Dropdown;