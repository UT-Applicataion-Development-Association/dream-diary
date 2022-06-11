module.exports.registerRoutes = (app) => {
    app.use('/api/auth', require('./auth'))
    app.use('/api', require('./dream'))
}
