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
 * @param {any} action { type, state }
 *   @example PUSH: state = { id, content, level, duration }
 *   @example POP: state = { id }
 * @returns {object} newState
 */
const messageReducer = (state, action) => {
  switch (action.type && action.type.toUpperCase()) {
    case 'PUSH':
      return { messages: state.messages.concat(action.state) }
    case 'POP':
      const messages = state.messages.filter(
        (msg) => msg.id !== action.state.id
      )
      return { messages }
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
