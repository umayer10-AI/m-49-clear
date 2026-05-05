const express = require('express')
const app = express()
const port = process.env.PORT || 5000

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

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/product', (req, res) => {
  res.send('Product Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
