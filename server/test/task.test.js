'use strict'

const server = require('../server')
const chai = require('chai')
const Task = require('../models/task.model')
const expect = chai.expect

let task = new Task({ taskname: 'Learn Nodejs' })

chai.use(require('chai-http'))

describe('TaskController Test', () => {

  it('POST /task', (done) => {

    chai.request(server)
      .post('/task')
      .send(task)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        task = new Task(res.body)
        done()
      })

  })

  it('PUT /task', (done) => {

    task.SetTaskName('Learn Angular.js')

    chai.request(server)
      .put(`/task/${task.id}`)
      .send(task)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        done()
      })
  })


  it('DELETE /task', (done) => {

    chai.request(server)
      .del(`/task/${task.id}`)
      .send(task)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        done()
      })

  })

  it('GET /task', (done) => {

    chai.request(server)
      .get(`/task`)
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200)
        done()
      })
  })

})