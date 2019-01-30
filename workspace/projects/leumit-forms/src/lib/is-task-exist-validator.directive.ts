/**
 * check if there is a todo task with the primary key which the user typed
 * <input type="number" leumitIsTaskExist />
 * 
 * 1. implements AsyncValidator
 * 2. register with DI
 * 
 */

import { Directive, forwardRef } from '@angular/core';
import { AsyncValidator, ValidationErrors, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { LeumitValidators } from './leumit-validators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Directive({
  selector: '[leumitIsTaskExist]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => IsTaskExistValidatorDirective)
    }
  ]
})
export class IsTaskExistValidatorDirective implements AsyncValidator {

  constructor(
    private _http : HttpClient
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this._http
      .get(`https://nztodo.herokuapp.com/api/task/${control.value}/?format=json`)
      .pipe(
        map(() => null),
        catchError(() => of({NO_TODO_TASK : 'there is no todo task with this id'}))
      )
  }

}
