import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: '**', redirectTo: 'user'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
