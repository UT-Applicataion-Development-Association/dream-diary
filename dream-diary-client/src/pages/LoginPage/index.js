import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'

import UserContext from 'stores/UserContext'

import './login-page.scss'
import { useEffect } from 'react'

const LoginPage = () => {
  const userCtx = useContext(UserContext)

  // Clear current user
  useEffect(() => {
    userCtx.dispatch({ type: 'CLEAR' })
  }, [])
  console.log(userCtx)

  return (
    <div className="page login-page">
      <div className="login-page-title">登 录</div>
      <LoginForm />
      <div className="link-to-signup">
        还没有账号？
        <Link to="/signup">立即注册</Link>
      </div>
    </div>
  )
}

export default LoginPage
