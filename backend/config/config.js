

const dotenv = require("dotenv")



module.exports = {
    database: {
        db: process.env.RDB_DB || "Makiti",
        host: process.env.RDB_HOST || "127.0.0.1",
        port: process.env.RDB_PORT || 28015
    },

    port: process.env.APP_PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',

    email:{
        host      : 'smtp.gmail.com',
        user      : 'your-email-address@gmail.com',
        password  : 'your-email-password',
        sender    : 'Your Name <your-email-address@gmail.com>',
        resetLink : 'http://localhost:8080/reset-password?e=%s&p=%s' // 2 placeholders for email and password hash
    }
}
 