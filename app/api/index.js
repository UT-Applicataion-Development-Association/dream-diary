module.exports.registerRoutes = (app) => {
    // app.use("/api", require("./auth"));
    app.use('/api', require('./dream'))
}
