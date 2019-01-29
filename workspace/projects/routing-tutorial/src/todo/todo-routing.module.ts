import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

// '/todo' => TodoList
// /todo?search=sadsdf => TodoList
// '/todo/:id/:slug' => TodoDetails

const routes: Routes = [
  {path: '' , component: TodoListComponent},
  {path: ':id/:slug' , component: TodoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
