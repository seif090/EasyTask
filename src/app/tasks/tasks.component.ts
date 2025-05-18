import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId! : string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  tasks = [
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
get selectedUserTasks(){
  return this.tasks.filter(task => task.userId === this.userId);
}

onCompleteTask(id: string) {
  this.tasks = this.tasks.filter(task => task.id !== id);
}

onNewTask() {
  this.isAddingTask = true;

}

onCancelAddTask() {
  this.isAddingTask = false;
}

onAddTask(taskData: NewTaskData) {
  this.tasks.push({
    id: Math.random().toString(),
    userId: this.userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.dueDate.toISOString()
  });
  this.isAddingTask = false;
}

}
