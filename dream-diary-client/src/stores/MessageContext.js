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
 * @param {any} action { type, payload }
 *   @example PUSH: payload = { id, content, level, duration }
 *   @example POP: payload = { id }
 * @returns {object} newState
 */
const messageReducer = (state, action) => {
  switch (action.type && action.type.toUpperCase()) {
    case 'PUSH':
      return { messages: state.messages.concat(action.payload) }
    case 'POP':
      const messages = state.messages.filter(
        (msg) => msg.id !== action.payload.id
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
