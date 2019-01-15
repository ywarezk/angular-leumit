## Redux

In this lesson we will learn about redux and how to combine redux with angular

### Lesson Plan

* What is a state machine
* State
* Action
* The benefit of writing components as state machine
* the problem managing complex data with rxjs
* What is Redux
* Redux Architecture
* @ngrx/store
* Actions
* Reducers
* Reducer map
* connecting actions and state to components
* Redux dev tools
* async 
* overview of other ngrx packages

### EX.

* Create a todo application with angular and @ngrx/store
* your state will contain a collection of todo tasks that will be manage with @ngrx/entity
* your state will also contain a loading boolean flag
* your state will also contain an error key containing error when requesting the tasks from the server
* the tasks in the state should be populated from the server: https://nztodo.herokuapp.com/api/task/?format=json
* you should have a component to display the list from the task
* you should have a component to display a loading spinner when the loading is true
* the component should be OnPush
* you can use angular meterial for the spinner

