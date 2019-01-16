import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Insert } from '../redux/todo-actions';
import { Store } from '@ngrx/store';
import { EntireState } from '../redux/reducers';

@Component({
  selector: 'app-todo-form',
  template: `
    <form (submit)="addNewTask($event)">
      <input type="text" placeholder="enter todo task" (input)="todoTask = $event.target.value" />
    </form>
  `,
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {
  todoTask : string = '';

  constructor(private _store : Store<EntireState>) { }

  ngOnInit() {
  }

  // this component dispatch an action
  // for action to  go through the store we have to inject the store service
  // and call the dispatch function
  addNewTask = (event) => {
    this._store.dispatch(new Insert(this.todoTask));

    event.preventDefault();
  }

}
