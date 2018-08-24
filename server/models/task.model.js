'use strict'

class Task {

  constructor(obj){
    this.id = obj.id
    this.taskname = obj.taskname
    this.completed = obj.completed
    this.createdAt = obj.createdAt
    this.finishedAt = obj.finishedAt
  }

  GetId(){
    return this.id
  }

  GetTaskName(){
    return this.taskname
  }

  GetCompleted(){
    return this.completed
  }

  GetCreatedAt(){
    return this.createdAt
  }

  GetFinishedAt(){
    return this.finishedAt
  }

  SetId(id){
    this.id = id
  }

  SetTaskName(taskname){
    this.taskname = taskname
  }

  SetCompleted(completed){
    this.completed = completed
  }

  SetCreatedAt(createdAt){
    this.createdAt = createdAt
  }

  SetFinishedAt(finishedAt){
    this.finishedAt = finishedAt
  }

}

module.exports = Task