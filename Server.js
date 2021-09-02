import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

let user_database = [
    {
        name: 'Adam',
        age: 12,
        gender: 'M'
    },
    {
        name: 'Bengt',
        age: 23,
        gender: 'M'
    },
    {
        name: 'Gertrud',
        age: 45,
        gender: 'F'
    },
    {
        name: 'Dana',
        age: 20,
        gender: 'F'
    }
]


app.get('/', function (req, res) {
    res.send('API is alive!')
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})