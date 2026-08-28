const express = require('express')
const campusData = require('./campusData')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Smart Campus OS 🚀')
})

app.get('/campus', (req, res) => {
  res.json(campusData)
})

app.listen(port, () => {
  console.log(`Smart Campus OS listening on port ${port}`)
})