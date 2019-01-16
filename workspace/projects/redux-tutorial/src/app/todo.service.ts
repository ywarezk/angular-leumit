import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Effect, Actions, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { SetTasks } from './redux/todo-server-action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // init

  @Effect()
  initTasks$ = this.action$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(() => this.getAllTasksFromServer()),
    map((tasks) => new SetTasks(tasks))
  )

  // derive new action from previous action

  constructor(private _http: HttpClient, private action$ : Actions) {}

  /**
   * send ajax request to server
   */
  getAllTasksFromServer = () : Observable<any> => {
    return this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }
}
