import React from 'react'

const UserContext = React.createContext({
  _id: '',
  name: '',
  email: '',
  token: '',
})

export default UserContext
