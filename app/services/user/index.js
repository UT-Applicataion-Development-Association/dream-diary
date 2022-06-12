const jwt = require('jsonwebtoken')

const { userDao } = require('../../dao')
const config = require('../../../configs')

class UserServices {
    generateToken(id, email, isAdmin) {
        return jwt.sign({ userId: id, email, isAdmin }, config.secretKey, {
            expiresIn: '1d',
        })
    }

    async createUser({ name, password, email }) {
        const checkExist = await userDao.retrieveByEmail(email)
        if (checkExist) {
            throw new Error('User already exists')
        }
        const user = await userDao.create({
            name,
            password,
            email,
        })
        return user
    }

    async getUsers(filter) {
        const users = await userDao.find(filter)
        return users
    }

    async getUser(_id) {
        const user = await userDao.retrieve(_id)
        return user
    }

    async getUserByEmail(email) {
        const user = await userDao.retrieveByEmail(email)
        return user
    }

    async updateUser(id, updatedBody) {
        // TODO: Check if needed to be split into update info and update password
        const user = await userDao.update(id, updatedBody)
        return user
    }

    async updateUserPassword(email, updatedPwd) {
        // TODO: IMPLEMENT THIS
    }

    async deleteUser(_id) {
        const user = await userDao.delete(_id)
        return user
    }
}

module.exports = UserServices
