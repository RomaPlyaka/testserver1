const express = require('express')
const app = express()
const app2 = express()
const app3 = express()

app.get('/',(req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})
app2.get('/api',(req, res) => {
      res.sendFile(`${__dirname}/public/api.html`)
})
app3.get('/pony',(req, res) => {
    res.sendFile(`${__dirname}/public/pony.html`)
})
 
app.listen(3000, '0.0.0.0', () => {
    console.warn('Server express in https://0.0.0.0:3000')
})
app2.listen(4000, '0.0.0.0', () => {
    console.warn('Server express in https://0.0.0.0:4000')
})
app3.listen(3100, '0.0.0.0', () => {
    console.warn('Server express in https://0.0.0.0:4000')
})
