import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UserContext from 'stores/UserContext'
import './login-form.scss'

const loginUser = async (email, password) => {
  // TODO: submit to backend
  const _id = Math.floor(Math.random() * 100)
  const username = 'Test User'
  const token = `${Math.floor(Math.random() * 10000)}`
  return { user: { _id, email, username }, token }
}

const LoginForm = () => {
  const navigate = useNavigate()

  const userCtx = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = await loginUser(email, password)
      if (user) {
        userCtx.dispatch({ type: 'SET', value: user })
        navigate('/')
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (err) {
      alert(err)
    }
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
      <button type="submit" className="login-form-btn">
        登录
      </button>
    </form>
  )
}

export default LoginForm
