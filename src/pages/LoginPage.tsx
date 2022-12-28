//import { instance } from "../apis/axios";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginImg from "../assets/imgs/Login.png";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const LoginPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  // e.preventDefault();

  const onLogin = () => {
    console.log(id, pwd);
    if (!id) {
      return alert("ID를 입력하세요.");
    } else if (!pwd) {
      return alert("Password를 입력하세요.");
    } else {
      axios
        .post("https://c185-183-107-19-69.jp.ngrok.io/teacher/auth", {
          account_id: id,
          password: pwd,
        })
        .then(function (res) {
          const { access_token, refresh_token } = res.data;
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${access_token}`;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          localStorage.setItem("grade", "1");
          localStorage.setItem("classNum", "1");
          navigate("/main");
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  const onClickLoginBtn = () => {
    console.log(id);
    console.log(pwd);
    onLogin();
    setId("");
    setPwd("");
  };

  useEffect(() => {
    localStorage.removeItem("grade");
    localStorage.removeItem("classNum");
  }, []);

  return (
    <PageBackground>
      <MainDiv>
        <SubDiv>
          <LoginDiv>
            <h2>LOGIN</h2>
            <hr />
            <InputContainer>
              <form>
                <InputDiv>
                  <p>아이디</p>
                  <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    placeholder="아이디를 입력해주세요"
                  />
                </InputDiv>
                <InputDiv>
                  <p>비밀번호</p>
                  <input
                    value={pwd}
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                  />
                </InputDiv>
              </form>
            </InputContainer>

            <Link to="/signUp">회원가입으로 이동</Link>
            <button onClick={() => onClickLoginBtn()}>로그인</button>
          </LoginDiv>
          <ImgDiv>
            <img src={LoginImg} alt="" />
          </ImgDiv>
        </SubDiv>
      </MainDiv>
    </PageBackground>
  );
};

export default LoginPage;

const InputContainer = styled.div`
  padding-bottom: 15px;
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
  /* justify-content: space-around; */
  gap: 311px;
  margin-left: 300px;
`;
const LoginDiv = styled.div`
  width: 320px;
  height: 351px;
  /* display: inline-block; */
  text-align: left;
  h2 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    padding: 0 0 20px;
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

  button {
    margin-top: 20px;
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
    border-radius: 5px;
    border: 1px solid #9e9e9e;
  }
`;
const ImgDiv = styled.div`
  img {
    width: 388px;
    height: 350px;
  }
`;
