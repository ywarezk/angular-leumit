import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-tutorial';

  doctorControl : FormControl = new FormControl({
    firstName: 'Yariv',
    lastName: 'Nerdeez'
  });

  isFormSubmitting = () => {
    console.log('form is submitting...');
  }

  private _doctor = {firstName: 'Yariv', lastName: 'Katz'}
  set doctor(newDoctor : any) {
    console.log(newDoctor);
    this._doctor = newDoctor;
  }

  get doctor() {
    return this._doctor;
  }
}
