import React, { useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './routes'
import UserContext, { userReducer } from 'stores/UserContext'

import 'styles/App.scss'
import 'styles/universal.scss'

const App = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    user: null,
    token: null,
  })

  return (
    <UserContext.Provider value={{ ...user, dispatch: userDispatch }}>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
