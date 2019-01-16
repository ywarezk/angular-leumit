import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { EntireState } from '../redux/reducers';

@Component({
  selector: 'app-todo-list',
  template: `
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
  constructor(private _store : Store<EntireState>) { }

  // we already have an observable with the entire state
  // we just use operator select to grab a some data from the state
  ngOnInit() {
    this.tasks$ = this._store.pipe(
      select('todo', 'tasks')
    )
  }

}
