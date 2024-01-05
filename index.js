const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hello World! This is twitter')
  })
  app.get('/youtube', (req, res) => {
    res.send('Hello World! This is youtube')
  })
  app.get('/you', (req, res) => {
    console.log('Hello World! This is youtube')
  })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})