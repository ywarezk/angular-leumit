import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Store } from '@ngrx/store';
import { EntireState } from './redux/reducers';
import { SetTasks, SetError, ToggleLoading } from './redux/todo-server-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'redux-tutorial';

  constructor(
    private _todoService : TodoService,
    private _store : Store<EntireState>
  ) {}

  // i want to send a request to the server and initiate the taskServer
  ngOnInit() {
    // this._store.dispatch(new ToggleLoading(true));
    // this._todoService.getAllTasksFromServer()
    //   .subscribe((tasks) => {
    //     this._store.dispatch(new SetTasks(tasks));
    //     this._store.dispatch(new ToggleLoading(false));
    //   }, (err) => {
    //     this._store.dispatch(new SetError(err));
    //     this._store.dispatch(new ToggleLoading(false));
    //   })
  }
}
