export class Task {

  id: string;
  taskname: string;
  completed: boolean;
  createdAt: Date;
  finishedAt: Date;

  constructor(
    id?: string,
    taskname?: string,
    completed?: boolean,
    createdAt?: Date,
    finishedAt?: Date
  ) {
    this.id = id;
    this.taskname = taskname;
    this.completed = completed;
    this.createdAt = createdAt;
    this.finishedAt = finishedAt;
  }

}