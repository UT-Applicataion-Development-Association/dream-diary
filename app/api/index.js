module.exports.registerRoutes = app => {
    app.use("/auth", require("./auth"));
    app.use("/api", require("./dream"));
};
