import React from 'react'

import { Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import ViewDreamPage from 'pages/ViewDreamPage'

export default RenderRoutes = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route exact path="/" element={<HomePage />} />

      <Route exact path="/dream/:id" element={<ViewDreamPage />} />

      {/* NOT FOUND */}
      <Route component={() => <h1>Not Found!</h1>} />
    </Routes>
  )
}
