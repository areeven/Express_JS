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

// Skapa variabel med tom sträng och return efter loop.
function returnUserNames() {
    let text = ''
    user_database.forEach(item => {
        text += item.name + ', '
    });
    return text
}

app.get('/', function (req, res) {
    res.send('API is alive!')
})

app.get('/users', (req, res) => {
    let returnText = returnUserNames()
    res.send(`Available users: ${returnText}!`)
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

