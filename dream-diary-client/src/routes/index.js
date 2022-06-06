import React from 'react'

import { Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import ViewDreamPage from 'pages/ViewDreamPage'
import CreateDreamPage from 'pages/CreateDreamPage'
import LoginPage from 'pages/LoginPage'
import SignupPage from 'pages/SignupPage'

const RenderRoutes = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route exact path="/" element={<HomePage />} />

      <Route exact path="/dream/:id" element={<ViewDreamPage />} />

      <Route exact path="/create-dream/:id" element={<CreateDreamPage />} />

      <Route exact path="/login" element={<LoginPage />} />

      <Route exact path="/signup" element={<SignupPage />} />

      {/* NOT FOUND */}
      <Route component={() => <h1>Not Found!</h1>} />
    </Routes>
  )
}

export default RenderRoutes
