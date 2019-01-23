import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';

// / -> HomeComponent
// /about -> AboutComponent
// ** -> Error404Component

// /todo/:id/:slug - one todo item
// /todo - the entire todo list
// /todo?search=what-user-is-typing
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'settings', loadChildren: '../settings/settings.module#SettingsModule'},
  {path: 'todo', loadChildren: '../todo/todo.module#TodoModule'},
  {path: 'modals', outlet: 'popups', loadChildren: '../auth/auth.module#AuthModule'},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
