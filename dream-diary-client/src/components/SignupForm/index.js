import useFetch from 'hooks/useFetch'
import useMessage from 'hooks/useMessage'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignupForm.scss'

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const message = useMessage()

  const { error, loading, data, callFetch } = useFetch(
    {
      route: '/auth/register',
      method: 'post',
    },
    () => {
      message.success('欢迎注册！')
      navigate('/login')
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    callFetch({
      body: {
        name: username,
        email,
        password,
      },
    })
  }

  // On error
  useEffect(() => {
    error && message.error(error)
  }, [error])

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input
        type="text"
        value={username}
        placeholder="用户名"
        name="username"
        className="signup-form-input"
        onChange={(e) => setUsername(e.target.value)}
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
        type="password"
        value={password}
        placeholder="密码"
        name="password"
        className="signup-form-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="submit-btn">
        注册
      </button>
    </form>
  )
}

export default SignupForm
