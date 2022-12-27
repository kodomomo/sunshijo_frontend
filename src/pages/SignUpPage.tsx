import { Link } from "react-router-dom";
import styled from "styled-components";
import SignUpImg from "../assets/imgs/Sign-Up.png";
//import { instance } from "../apis/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [subject, setSubject] = useState("");
  const [authCode, setAuthCode] = useState("");

  const onSignUp = () => {
    console.log(id, pwd, name, authCode, workPlace, subject);
    if (!id || !pwd || !name || !authCode || !workPlace || !subject) {
      alert("내용을 모두 기재해주세요!");
    } else {
      axios
        .post("https://c185-183-107-19-69.jp.ngrok.io/teacher/register", {
          account_id: id,
          password: pwd,
          name: name,
          auth_code: authCode,
          work_place: workPlace,
          subject: subject,
        })
        .then((res) => {
          setId("");
          setPwd("");
          setName("");
          setWorkPlace("");
          setSubject("");
          setAuthCode("");
          navigate("/");
        });
    }
  };

  const personalData: string[] = ["아이디", "비밀번호", "이름", "선생님 코드"];
  const inputType: string[] = ["text", "password", "text", "text"];
  const inputValue: string[] = [id, pwd, name, authCode];
  const inputOnChage: ((value: string) => void)[] = [
    setId,
    setPwd,
    setName,
    setAuthCode,
  ];

  const personalDataList = personalData.map((list, index) => (
    <InputDiv>
      <p>{list}</p>
      <input
        type={inputType[index]}
        value={inputValue[index]}
        onChange={(e) => {
          inputOnChage[index](e.target.value);
        }}
        placeholder={list + "를 입력해주세요"}
      />
    </InputDiv>
  ));
  const onClickSignUp = () => {
    onSignUp();
  };
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
                  <select onChange={(e) => setWorkPlace(e.target.value)}>
                    <option>집무실을 선택해주세요</option>
                    <option>본부교무실</option>
                    <option>2교무실</option>
                    <option>3교무실</option>
                    <option>4교무실</option>
                    <option>산학협력부</option>
                  </select>
                </SelectDiv>
                <InputDiv>
                  <p>담당과목</p>
                  <input
                    value={subject}
                    type="text"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    placeholder="담당과목을 입력해주세요"
                  />
                </InputDiv>
              </InputContainer>
              <Link to="/">로그인으로 이동</Link>
              <LoginBtn>
                <button onClick={() => onClickSignUp()}>회원가입</button>
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
    border-radius: 5px;
    border: 1px solid #9e9e9e;
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
    border-radius: 5px;
    border: 1px solid #9e9e9e;
  }
`;
const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fed267;
`;
const MainDiv = styled.div`
  height: 100%;
  width: 77vw;
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
