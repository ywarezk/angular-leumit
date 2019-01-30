/**
 * doctor = {firstName : string, lastName: string}
 * <lib-doctor-form-control [(ngModel)]="doctor" ></...>
 * <input [formControl]=""
 * <lib-doctor-form-control [formControl]="" ></...>
 * 
 * custom ng model
 * - my own customize form control
 * - i can attach ngModel
 * - or i can use in reactive approach
 * 
 * How to create
 * 1 - implements ControlValueAccessor
 * 2 - register myself as a form control as an input in form
 */

import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface IDoctor {
  firstName : string;
  lastName : string;
}

@Component({
  selector: 'lib-doctor-form-control',
  templateUrl: './doctor-form-control.component.html',
  styleUrls: ['./doctor-form-control.component.css'],
  providers: [
    // {provide: DoctorService, useClass: DoctorService},
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DoctorFormControlComponent)
    }  
  ]
})
export class DoctorFormControlComponent implements OnInit, ControlValueAccessor, OnDestroy {

  private _value : IDoctor = {firstName: '', lastName: ''}
  private _changeCb : any;
  private _touchedCb : any;
  private _sub : Subscription;

  lastName : FormControl = new FormControl(this._value.lastName);

  private _sendChange = () => {
    if (this._changeCb) {
      this._changeCb(this._value);
    }
  }

  set firstName(value: string) {
    this._value.firstName = value;
    this._sendChange();
  }

  get firstName() : string {
    return this._value.firstName;
  }

  constructor() { }

  ngOnInit() {
    this._sub = this.lastName.valueChanges.subscribe((lastName : string) => {
      this._value.lastName = lastName;
      this._sendChange();
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  /**
   * init our component
   * @param doctor 
   */
  writeValue(doctor : IDoctor) {
    this._value = doctor;
    if (doctor) 
      this.lastName.setValue(doctor.lastName);
  }

  // change for us: either first name or last name is changing
  registerOnChange(fn : any) {
    this._changeCb = fn; // when our control is changing -> this._changeCb(updatedDoctor)
  }

  // touch : focus in first name or last name
  registerOnTouched(fn: any): void {
    this._touchedCb = fn;
  }

  touched = () => {
    if (this._touchedCb) {
      this._touchedCb();
    }
  }

}
