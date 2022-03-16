const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "development",
  secretKey: process.env.SECRET_KEY || "MY_SECRET_KEY",
  databaseUri: process.env.DATABASE_URI || "mongodb://localhost:27017/dream-diary",
  jwtSecret: process.env.JWT_SECRET || "drdiary123"
};
