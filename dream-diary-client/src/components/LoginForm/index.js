import React, { useContext, useEffect, useState } from 'react'
import useMessage from 'hooks/useMessage'
import { useNavigate } from 'react-router-dom'
import useFetch from 'hooks/useFetch'
import UserContext from 'stores/UserContext'
import './LoginForm.scss'

const LoginForm = () => {
  const navigate = useNavigate()
  const message = useMessage()

  const userCtx = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, loading, data, callFetch } = useFetch(
    {
      route: '/auth/login',
      method: 'post',
    },
    (data) => {
      userCtx.dispatch({ type: 'SET', payload: data })
      navigate('/')
    }
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    callFetch({
      body: {
        email,
        password,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        value={email}
        placeholder="邮箱"
        name="email"
        className="login-form-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="密码"
        name="password"
        className="login-form-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="submit-btn" disabled={loading}>
        登录
      </button>
    </form>
  )
}

export default LoginForm
