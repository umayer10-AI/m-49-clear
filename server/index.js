const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Umayer Ahmad')
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
