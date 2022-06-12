import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './routes'
import { UserProvider } from 'stores/UserContext'

import 'styles/App.scss'
import 'styles/universal.scss'

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
