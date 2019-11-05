const express = require('express')
const app = express()
 
app.get('/',(req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})
app.get('/api',(req, res) => {
      res.sendFile(`${__dirname}/public/api.html`)
})
 
app.listen(3000, '0.0.0.0', () => {
    console.warn('Server express in https://0.0.0.0:3000')
})