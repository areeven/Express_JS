import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

app.get('/', function (req, res) {
    res.send('API is alive!')
})


app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})