const { userDao } = require('../../dao')

class UserServices {

    async createUser(name, password, email) {
        // TODO: IMPLEMENT THIS
        const user = await userDao.create({
            name,
            password,
            email
        })
        return user
    }

    async getUser(email) {
        // TODO: also add get by ID version?
        const user = await userDao.retrieve(email)
        return user
    }

    async updateUser(filter, updatedBody) {
        // TODO: Check if needed to be split into update info and update password
        const user = await userDao.update(filter,updatedBody)
        return user
    }

    async updateUserPassword(email, updatedPwd) {
        // TODO: IMPLEMENT THIS
    }

    async deleteUser(email) {
        // TODO: IMPLEMENT THIS
        await userDao.delete(email)
        return
    }
}

module.exports = UserServices