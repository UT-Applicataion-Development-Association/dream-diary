import { useState, useEffect, useCallback, useContext } from 'react'
import UserContext from 'stores/UserContext'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://127.0.0.1:5000/api'

const useFetch = (
  { route, params, method = 'get', initialData = null },
  callback
) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [data, setData] = useState(initialData)

  // Get authentication token
  const userCtx = useContext(UserContext)
  const authToken = userCtx.state.token

  const callFetch = useCallback(
    async (body) => {
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
          callback && callback()
        } else {
          try {
            const responseJson = await response.json()
            setError(responseJson.msg)
          } catch (err) {
            throw new Error('Server response with illegal content')
          }
        }
      } catch (err) {
        // TODO: useError
        console.error(err)
        setError(err)
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
