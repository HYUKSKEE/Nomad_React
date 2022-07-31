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
        {/* XXX: form tag에서 method와 action은 2세대 웹 개발 시 필요했던 것들 */}
        {/* react 에서의 id는 root빼고 없다고 생각하면 됌 */}
        {/* id 값은 단 하나만 존재해야 하는데 CSR(Client Side Render)특성 상
         * 라우팅 된 페이지가 결국 stack 형태로 있는 상태임
         * 그래서 다른 페이지의 id 값과 충돌 될 경우가 있기 때문에 id로 지정하는 건 지양하는게 좋음
         */}
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
          <button
            type="submit"
            id="login-button"
            // inline style 지양 할 것
            // 이유: inline style은 memoization 에 매우 취약하기 때문에 지양하는게 좋음
            className={`submitButton ${isValidate && "validated"}`}
          >
            로그인
          </button>
        </form>
        {/* react에서는 a 태그를 쓰면 안됌 (우리가 만든 웹 페이지가 아닐 경우에만 a 태그를 써줘야함)
         * 이유 : a 태그를 쓰는 순간 Client Side Rendering의 장점인
         *       no-blinking 이 없어지고 결국 새로고침 되는 구조가 되어버림
         */}
        <a href="#">비밀번호를 잊으셨나요?</a>
      </main>
    </div>
  );
}

export default Login;
