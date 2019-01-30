import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LeumitValidators } from '../leumit-validators';



@Component({
  selector: 'lib-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  todo : FormControl = new FormControl('', {
    validators: [Validators.required],
    asyncValidators: [LeumitValidators.timerError]
  });

  formGroupBindingExample : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  doctorsForm : FormGroup = new FormGroup({
    doctors : new FormArray([
      new FormGroup({
        firstName: new FormControl('first name'),
        lastName: new FormControl('first name'),
      })
    ])
  })

  doctorsForm2 : FormGroup = new FormGroup({
    doctors : new FormArray([
      new FormControl({
        firstName: 'yariv',
        lastName: 'katz',
      })
    ])
  })

  // this.formGroupRegister.controls.email
  // this.formGroupRegister.controls.repeatPassword.controls.password
  formGroupRegister : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, LeumitValidators.leumitEmail]),
    repeatPassword : new FormGroup({
      password: new FormControl(''),
      repeat: new FormControl(''),
    }, [LeumitValidators.passwordRepeatMatch('password', 'repeat')])
  });

  formGroupRegister2 : FormGroup = this._formBuilder.group({
    email: this._formBuilder.control('', [Validators.email, LeumitValidators.leumitEmail]),
    repeatPassword: this._formBuilder.group({
      password: this._formBuilder.control(''),
      repeat: this._formBuilder.control('')
    }, [LeumitValidators.passwordRepeatMatch('password', 'repeat')])
  })

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
    // this.http.get('catch all doctors').subscribe
    // this.doctorsForm.controls.doctors.push(new FormGroup())

    // this.todo.valueChanges.subscribe(() => {
    //   console.log('changed value')
    // })
  }

  addDoctorFormGroup = () => {
    (this.doctorsForm.controls.doctors as FormArray).push(new FormGroup({
        firstName: new FormControl('first name'),
        lastName: new FormControl('first name'),
    }));
  }

  addDoctorFormGroup2 = () => {
    (this.doctorsForm2.controls.doctors as FormArray).push(new FormControl({
        firstName: '',
        lastName: '',
    }));
  }

}
