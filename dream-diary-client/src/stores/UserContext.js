import React from 'react'

const UserContext = React.createContext({
  user: {
    _id: '',
    name: '',
    email: '',
  },
  token: '',

  dispatch: () => {},
})

const userReducer = (state, action) => {
  switch (action.type.toUpperCase()) {
    case 'SET':
      return { ...state, ...action.value }
    case 'SET_TOKEN':
      return { ...state, token: action.value }
    case 'CLEAR':
      return {
        user: null,
        token: null,
      }
    default:
      return state
  }
}
export default UserContext
export { userReducer }
