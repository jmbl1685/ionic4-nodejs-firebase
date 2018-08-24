'use strict'

const { db } = require('../firebase')
let tasksRef = db.ref('/tasks')
const Task = require('../models/task.model')

const TaskController = {}

TaskController.GetTask = async (req, res) => {

  const data = await tasksRef.once("value")
  const response = data.val()

  let task = Object.values(response)
      .map(obj => { return new Task(obj) })

  res.status(200).send(task)

}

TaskController.AddTask = async (req, res) => {

  const id = tasksRef.push().key
  const { taskname } = req.body

  let task = new Task({
    id,
    taskname,
    completed: false,
    createdAt: Date.now(),
    finishedAt: '-'
  })

  const response = await tasksRef.child(id)
    .set(task)
    .then(() => task)

  res.status(200).send(response)

}

TaskController.RemoveTask = async (req, res) => {

  const { id } = req.params
  const response = tasksRef.child(id).remove()
  res.status(200).send(response)

}

TaskController.UpdateTask = async (req, res) => {

  const { id } = req.params
  const { taskname } = req.body

  const task = new Task({
    id,
    taskname,
    completed: false,
    createdAt: Date.now(),
    finishedAt: '-'
  })

  const response = await tasksRef.child(id)
    .update(task)
    .then(() => task)

  res.status(200).send(response)

}

module.exports = TaskController