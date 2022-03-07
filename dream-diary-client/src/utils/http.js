const origin = process.env.REACT_APP_ORIGIN || window.location.protocol + "//" + window.location.host

async function get(route, params = {}) {
  const url = new URL(origin + route)

  // Append query params to url
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  // console.log("GET", url)

  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return { response, body: await response.json() }
}

async function post(route, data = {}) {
  const url = new URL(origin + route)

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return { response, body: await response.json() }
  } catch (error) {
    throw error
  }
}

async function put(route, data = {}) {
  const url = new URL(origin + route)

  const response = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return { response, body: await response.json() }
}

async function del(route, data = {}) {
  const url = new URL(origin + route)

  const response = await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return { response, body: await response.json() }
}

export { get, post, put, del };