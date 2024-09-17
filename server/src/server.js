const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000
const sessionMiddleware = require('./middlewares/SessionMiddleware');
const csrfMiddleware = require('./middlewares/CsrfMiddleware');
const { sequelize } = require('../models');
const allowedOrigins = require('../config/allowedOrigins');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(allowedOrigins))

app.use(sessionMiddleware);
app.use(csrfMiddleware.generateCsrfToken);

app.use('/api', require('./routes/api.routes'))
app.use('/oauth', require('./routes/oauth.routes'))
app.use('/authorize', require('./routes/auth.routes'))

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Database connected")
    } catch (error) {
        console.log("Database connection problem: ", error)
        process.exit(1)
    }
}

(async () => {
    await connectDB()
    // Start the server
    app.listen(port, (req, res) => {
        console.log(`http://localhost:${port}`)
    })
})()
