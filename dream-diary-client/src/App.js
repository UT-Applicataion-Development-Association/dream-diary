import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './routes'
import { UserProvider } from 'stores/UserContext'
import { MessageProvider } from 'stores/MessageContext'

import 'styles/App.scss'
import 'styles/universal.scss'
import MessageContainer from 'components/UI/MessageContainer'

const App = () => {
  return (
    <UserProvider>
      <MessageProvider>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
        <MessageContainer />
      </MessageProvider>
    </UserProvider>
  )
}

export default App
