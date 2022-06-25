import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from 'hooks/useFetch'
import UserContext from 'stores/UserContext'
import { randomToken } from 'utils/random'
import './LoginForm.scss'

// const loginUser = async (email, password) => {
//   // TODO: submit to backend
//   const _id = randomToken()
//   const username = 'Test User'
//   const token = randomToken()

//   if (email !== 'test@test.com') {
//     return null
//   }

//   return { user: { _id, email, username }, token }
// }

const LoginForm = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, loading, data, callFetch } = useFetch(
    {
      route: '/auth/login',
      method: 'post',
    },
    () => navigate('/')
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
      {error && <div className="error error-message">{error}</div>}
      <button type="submit" className="submit-btn">
        登录
      </button>
    </form>
  )
}

export default LoginForm
