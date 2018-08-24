'use strict'

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

require('dotenv').config({ path: '.env' })

const TaskController = require('./controllers/task.controller')

app.post('/task', TaskController.AddTask)
app.get('/task/:id?', TaskController.GetTask)
app.delete('/task/:id', TaskController.RemoveTask)
app.put('/task/:id', TaskController.UpdateTask)

app.listen(process.env.PORT, () => {
  console.log('Server running')
})

module.exports = app