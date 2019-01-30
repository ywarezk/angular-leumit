/**
 * <div [formGroup]="aaa" [leumitRepeat]="['password', 'repeat']" maxlength="5" >
 * <ng-container formGroupName="aaa" [leumitRepeat]="['compare', 'toThis']" />
 * <ng-container formGroupName="aaa" leumitRepeat />
 */

import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, FormGroup, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { LeumitValidators } from './leumit-validators';

@Directive({
  selector: '[leumitRepeat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => PasswordRepeatValidatorDirective)
    }
  ]
})
export class PasswordRepeatValidatorDirective implements Validator {
  @Input('leumitRepeat') controlNames = ['password', 'repeat'];

  constructor() { }

  validate(f: FormGroup): ValidationErrors | null {
    return LeumitValidators.passwordRepeatMatch(this.controlNames[0], this.controlNames[1])(f);
  }

}
