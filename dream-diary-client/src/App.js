import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './routes'
import UserContext from 'stores/UserContext'

import 'styles/App.scss'
import 'styles/universal.scss'

class App extends React.Component {
  render() {
    return (
      <UserContext.Provider
        value={{
          user: {
            _id: null,
            name: null,
            email: null,
          },
          token: null,
        }}
      >
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App
