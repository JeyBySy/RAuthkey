const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000
const sessionMiddleware = require('./middlewares/SessionMiddleware');
const { sequelize } = require('../models');
const allowedOrigins = require('../config/allowedOrigins');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(allowedOrigins))

app.use(sessionMiddleware);

app.use('/api', require('./routes/api.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/project', require('./routes/project.routes'))
app.use('/rauthkey', require('./routes/rauthkey.routes'))

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
