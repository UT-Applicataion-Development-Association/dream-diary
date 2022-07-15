const { handleError } = require('../middlewares/errorHandler')
const { Response, response } = require('../utils/response')
module.exports.registerRoutes = (app) => {
    app.use(handleError)

    app.use('/api/auth', require('./auth'))
    app.use('/api', require('./dream'))
    // Handle 404
    app.use((req, res, next) => {
        res.status(404).send(
            new Response({
                status: 404,
                msg: 'API not found',
            })
        )
    })
}
