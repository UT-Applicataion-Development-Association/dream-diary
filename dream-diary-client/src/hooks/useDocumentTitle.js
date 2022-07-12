/**
 * Reference:
 * https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app-1l7k
 */
import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    if (title) {
      document.title = `${title} | Dream Diary`
    }
  }, [title])

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    []
  )
}

export default useDocumentTitle
