import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-task' },
  { path: 'tasks-list', component: TasksListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
