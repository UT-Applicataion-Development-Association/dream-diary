import React, { useState, useCallback, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UserContext from 'stores/UserContext'

const RequireAuthentication = ({ children }) => {
  const userCtx = useContext(UserContext)

  const location = useLocation()

  return userCtx.state.token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ previousLocation: location }} />
  )
}

export default RequireAuthentication
