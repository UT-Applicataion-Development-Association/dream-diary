import React, { useState } from "react";
import "./signup-form.scss";

const SignupForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //handle submit yup
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input
        type="text"
        value={username}
        placeholder="用户名"
        name="username"
        className="signup-form-input"
        onchange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="邮箱"
        name="email"
        className="signup-form-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="密码"
        name="password"
        className="signup-form-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="singup-form-btn">
        注册
      </button>
    </form>
  );
};

export default SignupForm;
