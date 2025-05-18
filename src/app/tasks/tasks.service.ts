import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the fundamentals of Angular',
      dueDate: '2023-08-01'
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Master React',
    summary: 'Learn the fundamentals of React',
    dueDate: '2023-08-01',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Master Vue',
    summary: 'Learn the fundamentals of Vue',
    dueDate: '2023-08-01',
  },
  {
    id: 't4',
    userId: 'u4',
    title: 'Master Svelte',
    summary: 'Learn the fundamentals of Svelte',
    dueDate: '2023-08-01',
  },
  {
    id: 't5',
    userId: 'u5',
    title: 'Master Node.js',
    summary: 'Learn the fundamentals of Node.js',
    dueDate: '2023-08-01',
  },
  {
    id: 't6',
    userId: 'u6',
    title: 'Master Express.js',
    summary: 'Learn the fundamentals of Express.js',
    dueDate: '2023-08-01',
  },

];

getUserTasks(userId: string) {
  return this.tasks.filter(task => task.userId === userId);
}

addTask(taskData: NewTaskData, userId: string) {
   this.tasks.push({
    id: Math.random().toString(),
    userId: userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.dueDate.toISOString()
  });
}

removeTask(taskId: string) {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
}
}
