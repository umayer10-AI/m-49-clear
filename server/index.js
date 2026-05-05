const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: "Umayer", email: "jhon@example.com"},
    {id: 2, name: "Umayer", email: "jhon@example.com"},
    {id: 3, name: "Umayer", email: "jhon@example.com"},
    {id: 4, name: "Umayer", email: "jhon@example.com"},
    {id: 5, name: "Umayer", email: "jhon@example.com"},
]

app.get('/', (req, res) => {
  res.send(users)
})

app.post('/', (req, res) => {

    console.log("server data paisi",req.body)

    const newUser = req.body
    newUser.id = users.length+1
    users.push(newUser)

    res.send({ok: true, data: newUser, message: "Data paisi re vai😎"})
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/product', (req, res) => {
  res.send('Product Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
