import React, { useState } from 'react'
import './SignupForm.scss'

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: handle submit yup
  }

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
