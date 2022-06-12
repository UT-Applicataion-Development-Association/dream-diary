import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm'
import './sign-up.scss'

const SignupPage = () => {
  return (
    <div className="page signup-page">
      <div className="signup-page-title">欢迎注册</div>
      <SignupForm />
      <div className="link-to-login">
        已有账号？
        <Link to="/login">登录</Link>
      </div>
    </div>
  )
}

export default SignupPage
