## Angular forms

In this lesson we will learn how to handle forms using @angular/forms

### Lesson Plan

* What we want from our forms
* Reactive VS Template driven
* when to use reactive and when template driven
* FormControl
* NgModel - binding with template driven
* binding with reactive
* FormGroup
* NgForm
* FormArray
* Dynamic form
* Validation
* Custom validation
* FormBuilder
* ngSubmit

## EX

- create a component with a form to add a todo taks
- the form will be built with FormBuilder
- The form will contain the following fields and validations
- title - required, minlength 5, maxlength 100, alphanumeric values only
- description - required
- when - required date field
- group - required, maxlength 100

## EX

- Create a custom ng model component called TodoFormComponent
- This component will have all the fields for our todo task
- you can attach an ngModel directive to that component 
- place that component in a form and the result of the ngModel should be a new todo object