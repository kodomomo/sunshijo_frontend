import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUpImg from "../assets/imgs/Sign-Up.png";

const SignUpPage = () => {
  /*axios({
    url: "43.201.53.240:8000" + "/teachers/register",
    method: "POST",
  });*/
  const personalData: string[] = ["아이디", "비밀번호", "이름"];
  const personalDataList = personalData.map((list) => (
    <InputDiv>
      <p>{list}</p>
      <input placeholder={list + "를 입력해주세요"} />
    </InputDiv>
  ));
  return (
    <>
      <PageBackground>
        <MainDiv>
          <SubDiv>
            <SignUpDiv>
              <h2>SIGN UP</h2>
              <hr />
              <InputContainer>
                {personalDataList}
                <SelectDiv>
                  <p>집무실</p>
                  <select>
                    <option>집무실을 선택해주세요</option>
                  </select>
                </SelectDiv>
                <InputDiv>
                  <p>담당과목</p>
                  <input placeholder="담당과목을 입력해주세요" />
                </InputDiv>
              </InputContainer>
              <Link to="/login">로그인으로 이동</Link>
              <LoginBtn>
                <button type="submit">로그인</button>
              </LoginBtn>
            </SignUpDiv>
            <ImgDiv>
              <img src={SignUpImg} alt="" />
            </ImgDiv>
          </SubDiv>
        </MainDiv>
      </PageBackground>
    </>
  );
};
const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 480px;
    height: 303.77px;
  }
`;
const SelectDiv = styled.div`
  padding-top: 20px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 10px;
  }
  select {
    width: 320px;
    height: 42px;
    text-indent: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;
const LoginBtn = styled.div`
  padding-top: 20px;
  button {
    width: 320px;
    height: 42px;
    background-color: #242424;
    color: #fff;
    border-radius: 5px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }
`;
const InputContainer = styled.div`
  padding-bottom: 20px;
`;
const InputDiv = styled.div`
  padding-top: 20px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 10px;
  }
  input {
    width: 320px;
    height: 42px;
    text-indent: 15px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;
const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fed267;
`;
const MainDiv = styled.div`
  height: 100%;
  width: 1500px;
  background-color: #fff;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubDiv = styled.div`
  display: flex;
  gap: 311px;
  margin-left: 250px;
`;
const SignUpDiv = styled.div`
  width: 320px;
  height: 659px;
  text-align: left;
  h2 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 20px;
  }
  hr {
    width: 67px;
    height: 2px;
    background-color: #fed267;
    border: 0;
  }
  a {
    color: #fed267;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 20px;
  }
`;

export default SignUpPage;
