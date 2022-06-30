import React from 'react'

const MessageContext = React.createContext({
  state: {
    messages: [],
  },

  dispatch: () => {},
})
MessageContext.displayName = 'MessageContext'

/**
 *
 * @param {any} state Previous state
 * @param {any} action { type: 'PUSH' | 'POP', state: {content, level, duration} }
 * @returns newState
 */
const messageReducer = (state, action) => {
  switch (action.type && action.type.toUpperCase()) {
    case 'PUSH':
      return { messages: state.messages.concat(action.state) }
    case 'POP':
      const [_, ...rest] = state.messages
      return { messages: rest }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(messageReducer, {
    messages: [],
  })

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageContext
