import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { UserComponent } from './user/user.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  declarations: [UserComponent, DoctorsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
