const { userDao } = require('../../dao')

class UserServices {

    async findUser(email) {
        const user = await userDao.find(email)
        return user
    }

    async createUser(name, password, email) {
        // TODO: IMPLEMENT THIS
        const user = await userDao.create({
            name,
            password,
            email
        })
        return user
    }

    async getUser(id) {
        // TODO: IMPLEMENT THIS
    }

    async updateUserName(email, updatedName) {
        // TODO: IMPLEMENT THIS
    }

    async updateUserPassword(email, updatedPwd) {
        // TODO: IMPLEMENT THIS
    }

    async deleteUser(email) {
        // TODO: IMPLEMENT THIS
    }
}

module.exports = UserServices