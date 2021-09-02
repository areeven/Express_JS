import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

let user_database = [
    {
        id: 10,
        name: 'Adam',
        age: 12,
        gender: 'Male'
    },
    {
        id: 11,
        name: 'Bengt',
        age: 23,
        gender: 'Male'
    },
    {
        id: 12,
        name: 'Gertrud',
        age: 45,
        gender: 'Female'
    },
    {
        id: 13,
        name: 'Dana',
        age: 20,
        gender: 'Female'
    }
]

// Skapa variabel med tom sträng och return efter loop.
function returnUserNames() {
    let text = ''
    user_database.forEach(item => {
        text += item.name + ' id=' + item.id + ', <br>'
    })
    return text
}

// Tar endast emot nummer!
function getUserById(id) {
    let text = `User with id = ${id} `

    for (const item of user_database) {
        if (id === item.id) {
            text += `is <br>${item.name} with the age of = ${item.age} and gender ${item.gender}<br>`
            return text
        }
    }

    text += "<br>Doesn't exist in the database"

    return text
}



app.get('/', function (req, res) {
    res.send('API is alive!')
})

app.get('/users', (req, res) => {
    let returnText = returnUserNames()
    res.send(`Available users: <br>${returnText}!`)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    let returnText = getUserById(id)
    res.send(returnText)
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

