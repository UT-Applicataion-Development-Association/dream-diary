import useMessage from 'hooks/useMessage'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UserContext from 'stores/UserContext'
import { randomToken } from 'utils/random'
import './LoginForm.scss'

const loginUser = async (email, password) => {
  // TODO: submit to backend
  const _id = randomToken()
  const username = 'Test User'
  const token = randomToken()

  if (email !== 'test@test.com') {
    return null
  }

  return { user: { _id, email, username }, token }
}

const LoginForm = () => {
  const navigate = useNavigate()
  const message = useMessage()

  const userCtx = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const loginInfo = await loginUser(email, password)
      if (loginInfo) {
        userCtx.dispatch({ type: 'SET', payload: loginInfo })
        navigate('/')
      } else {
        message.error('Invalid email or password')
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
      {error && <div className="error error-message">{error}</div>}
      <button type="submit" className="submit-btn">
        登录
      </button>
    </form>
  )
}

export default LoginForm
