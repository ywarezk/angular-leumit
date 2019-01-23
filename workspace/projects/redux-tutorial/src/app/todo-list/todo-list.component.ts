import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { EntireState } from '../redux/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  template: `
    <input type="search" placeholder="Search in list" (input)="search($event)" />
    <ul>
      <li *ngFor="let task of (tasks$ | async)">
        {{task}}
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  tasks$ : Observable<string[]>

  // i want this component to be connected to part of the state
  // todo -> tasks
  constructor(
    private _store : Store<EntireState>,
    private _router : Router
  ) { }

  // we already have an observable with the entire state
  // we just use operator select to grab a some data from the state
  ngOnInit() {
    this.tasks$ = this._store.pipe(
      select('todo', 'tasks')
    )
  }

  // /?search=what-user-typed
  search = (event) => {
    const searchString = event.target.value;
    this._router.navigateByUrl(`/?search=${searchString}`);
  }

}
