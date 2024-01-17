const express = require('express')
const authRoute = require("./router/auth");
const router = require('./router/users')
const app = express()
const connectDB = require('./config/db')

const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Khanif Yunan Pratama')
})

app.use(router)
app.use(authRoute);

connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})