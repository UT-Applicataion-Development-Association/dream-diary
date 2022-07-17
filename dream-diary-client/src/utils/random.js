export const randomToken = () => Math.random().toString(36).substr(2)
export const randomEmail = () => `${randomToken()}@test.com`
export const randomDate = () => new Date()
