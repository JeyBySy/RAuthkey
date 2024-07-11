const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000
const { sequelize } = require('../models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/', require('./router/admin.routes'))
app.use('/oauth', require('./router/oauth.routes'))
app.use('/authorize', require('./router/auth.routes'))

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
