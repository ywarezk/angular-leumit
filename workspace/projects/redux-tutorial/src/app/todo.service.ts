import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Effect, Actions, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import { mergeMap, map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SetTasks, ToggleLoading } from './redux/todo-server-action';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // init

  /**
   * Observable<Action>
   */
  @Effect()
  initTasks$ = this.action$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(() => this.getAllTasksFromServer()),
    map((tasks) => new SetTasks(tasks))
  );

  /**
   * Observable<Action>
   */
  @Effect()
  initIsLoading$ = this.action$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(() => new ToggleLoading(true))
  );

  // toggle is loading back to false after SetTasks action
  @Effect()
  isLoadingFinished$ = this.action$.pipe(
    ofType(SetTasks.TYPE),
    map(() => new ToggleLoading(false))
  )

  // lets create an effect that will run navigation is changing
  // we have search in the url
  // ajax call to server
  // update the list of tasks
  @Effect()
  isSearching$ = this.action$.pipe(
    ofType(ROUTER_NAVIGATED),
    filter((action : RouterNavigatedAction) => action.payload.routerState.root.url.length === 0),
    filter((action : RouterNavigatedAction) => action.payload.routerState.root.queryParams.search),
    debounceTime(1000),
    distinctUntilChanged(),
    mergeMap((action : RouterNavigatedAction) => this.getAllTasksFromServer(action.payload.routerState.root.queryParams.search)),
    map((tasks) => new SetTasks(tasks))
  )


  // derive new action from previous action

  constructor(private _http: HttpClient, private action$ : Actions) {}

  /**
   * send ajax request to server
   */
  getAllTasksFromServer = (search : string = '') : Observable<any> => {
    return this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`);
  }
}
