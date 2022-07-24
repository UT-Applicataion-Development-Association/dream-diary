import useDocumentTitle from 'hooks/useDocumentTitle'
import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm'
import './sign-up.scss'

const SignupPage = () => {
  useDocumentTitle('Sign up')
  return (
    <div className="page signup-page">
      <div className="signup-page-title">创建账号</div>
      <SignupForm />
      <div className="link-to-login">
        已有账号？
        <Link to="/login">登录</Link>
      </div>
    </div>
  )
}

export default SignupPage
