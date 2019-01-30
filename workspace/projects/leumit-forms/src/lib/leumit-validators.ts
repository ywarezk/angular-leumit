import { AbstractControl, FormControl, ValidationErrors, FormGroup, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';


export class LeumitValidators {
    static leumitEmail = (control : FormControl) : ValidationErrors | null => {
        if (!control.value) return null;
        if (control.value.indexOf('leumit.com') !== -1) {
            return null
        } else {
            return {NO_LEUMIT_EMAIL : 'please supply a valid leumit email'};
        }
    }

    static passwordRepeatMatch = (passwordName = 'password', repeatName = 'repeat') : ValidatorFn => {
        const ourValidationFn = (f : FormGroup) : ValidationErrors | null  => {
            if (!f.controls[passwordName] || !f.controls[repeatName]) {
                return null;
            }
            if (f.controls[passwordName].value === f.controls[repeatName].value) {
                return null;
            } else {
                return {NO_MATCH: 'the password and repeat do not match'};
            }
        }
        return ourValidationFn; 
    }
    
    /**
     * runs a timer for 1 second and then returns an error
     */
    static timerError = (control : AbstractControl) : Promise<ValidationErrors | null> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    TIMER_ERROR: 'some error happened'
                })
            }, 1000)
        })
    }
    
}