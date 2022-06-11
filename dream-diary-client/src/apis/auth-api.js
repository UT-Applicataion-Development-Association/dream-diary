export default AuthAPI = {
  login: () => {
    return {
      msg: ReasonPhrases.OK,
      status: StatusCodes.OK,
      entity: {
        user: {
          _id: new Date().getTime().toString(),
          email,
          username: 'Test user',
        },
        token: new Date().getTime().toString(),
      },
      timestamp: new Date(),
    }
  },
}

export const loginApi = async (email, password) => {
  // TODO: Send request to backend

  const response = Auth

  return response
}
