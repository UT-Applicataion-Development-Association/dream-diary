import React, { useContext, useState } from 'react'
import UserContext from 'stores/UserContext'
import './login-form.scss'

const loginUser = async (email, password) => {
  const _id = Math.floor(Math.random() * 100)
  const username = 'Test User'
  const token = `${Math.floor(Math.random() * 10000)}`
  return { user: { _id, email, username }, token }
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userCtx = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    //handle submit yup
    try {
      const user = await loginUser(email, password)
      if (user) {
        userCtx.dispatch({ type: 'SET', value: user })
        console.log(userCtx)
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
        type="text"
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
