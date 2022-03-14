import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import "./login-page.scss";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page-title">登 录</div>
      <LoginForm />
      <div className="link-to-signup">
        还没有账号？
        <Link to="/signup">立即注册</Link>
      </div>
    </div>
  );
};

export default LoginPage;
