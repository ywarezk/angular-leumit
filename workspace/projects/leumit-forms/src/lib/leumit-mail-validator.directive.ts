/**
 * will validate our email ends with leumit.com
 * <input type="email" leumitEmail />
 * 
 * 1. implements Validator
 * 2. register the directive with the DI as a validation directive
 */

import { Directive, forwardRef } from '@angular/core';
import {Validator, FormControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';
import { LeumitValidators } from './leumit-validators';

@Directive({
  selector: 'input[type="email"][leumitEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => LeumitMailValidatorDirective)
    }
  ]
})
export class LeumitMailValidatorDirective implements Validator {

  constructor() { }

  validate(control: FormControl): ValidationErrors | null {
    return LeumitValidators.leumitEmail(control);
  }
}
