import React from 'react'

const UserContext = React.createContext({
  state: {
    user: {
      _id: '',
      name: '',
      email: '',
    },
    token: '',
  },

  dispatch: () => {},
})
UserContext.displayName = 'UserContext'

/**
 *
 * @param {any} state Previous state
 * @param {any} action { type: 'SET' | 'CLEAR', state?: newState }
 * @returns newState
 */
const userReducer = (state, action) => {
  console.log('Reduce', state, action)
  switch (action.type && action.type.toUpperCase()) {
    case 'SET':
      return action.state
    case 'CLEAR':
      return {
        user: null,
        token: null,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, {
    user: null,
    token: null,
  })

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
