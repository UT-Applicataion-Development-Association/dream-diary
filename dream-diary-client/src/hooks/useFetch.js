import { useState, useEffect, useCallback, useContext } from 'react'
import UserContext from 'stores/UserContext'
import useMessage from './useMessage'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:5000/api'

const useFetch = ({ route, method = 'get', initialData = null }, callback) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(initialData)

  const message = useMessage()

  // Get authentication token
  const userCtx = useContext(UserContext)
  const authToken = userCtx.state.token

  const callFetch = useCallback(
    async ({ params, body }) => {
      try {
        setLoading(true)
        setError(null)

        // Send request
        const requestBody = {
          method,
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
            Authorization: authToken ? `Bearer ${authToken}` : null,
          },
          body: body ? JSON.stringify(body) : null,
        }

        const response = await fetch(
          BASE_URL + route + (params ? new URLSearchParams(params) : ''),
          requestBody
        )

        // Get response
        if (response.ok) {
          const responseJson = await response.json()
          setData(responseJson.entity)
          callback && callback(responseJson.entity)
        } else {
          try {
            const responseJson = await response.json()
            const errorMsg = responseJson.msg
            console.error(
              `${responseJson.entity.error.name}: ${responseJson.msg}`
            )
            setError(errorMsg)
            message.error(errorMsg)
          } catch (err) {
            throw new Error('Server response with unexpected content')
          }
        }
      } catch (err) {
        console.error(err)
        setError(err.message)
        message.error(err.message)
      } finally {
        setLoading(false)
      }
    },
    [userCtx]
  )

  return {
    error,
    loading,
    data,
    callFetch,
  }
}

export default useFetch
