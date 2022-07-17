import React, { useContext, useCallback } from 'react'
import MessageContext from 'stores/MessageContext'
import { randomToken } from 'utils/random'

const useMessage = (duration = 2000) => {
  const msgCtx = useContext(MessageContext)

  const messageAtLevel = useCallback(
    (level) => (content) => {
      msgCtx.dispatch({
        type: 'PUSH',
        payload: {
          id: randomToken(),
          level,
          content,
          duration,
        },
      })
    },
    []
  )

  const log = useCallback(messageAtLevel('notification'), [])
  const error = useCallback(messageAtLevel('error'), [])
  const warning = useCallback(messageAtLevel('warning'), [])
  const success = useCallback(messageAtLevel('success'), [])

  return {
    log,
    error,
    warning,
    success,
  }
}

export default useMessage
