import { NgModule } from '@angular/core';
import {FormControl, NgModel, FormsModule, ReactiveFormsModule, FormGroup, NgForm} from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CommonModule } from '@angular/common';
import { DoctorFormControlComponent } from './doctor-form-control/doctor-form-control.component';
import { LeumitMailValidatorDirective } from './leumit-mail-validator.directive';
import { PasswordRepeatValidatorDirective } from './password-repeat-validator.directive';
import { IsTaskExistValidatorDirective } from './is-task-exist-validator.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TemplateDrivenComponent, ReactiveComponent, DoctorFormControlComponent, LeumitMailValidatorDirective, PasswordRepeatValidatorDirective, IsTaskExistValidatorDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [TemplateDrivenComponent, ReactiveComponent, DoctorFormControlComponent]
})
export class LeumitFormsModule { }
