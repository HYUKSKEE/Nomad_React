import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  function handleInput({ target }) {
    setAccount({
      ...account,
      [target.name]: target.value,
    });
  }

  const isValidate =
    account.email.includes("@") && account.password.length >= 5;

  return (
    <div className="container">
      <main className="loginDiv">
        <h1>westargram</h1>
        <form className="inputForm">
          <input
            name="email"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={account.email}
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={account.password}
            onChange={handleInput}
          />
          {isValidate && (
            <Link to="./Main">
              <button
                type="submit"
                id="login-button"
                className="submitButton validated "
              >
                로그인
              </button>
            </Link>
          )}
          <button
            to="./Main"
            type="submit"
            id="login-button"
            className={`submitButton ${isValidate && "validated"}`}
          >
            <Link to="./Main">로그인</Link>
          </button>
        </form>
        <a className="pwLink" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </main>
    </div>
  );
}

export default Login;
