import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, mergeMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  template: `
    <app-search></app-search>
    <ul>
      <li *ngFor="let task of tasks$ | async">
        <a [routerLink]="[task.id, task.title]">
          {{task.title}}
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks$ : Observable<any>;

  // /todo?search=dfg
  constructor(private _http : HttpClient, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.tasks$ = this._activatedRoute.queryParamMap.pipe(
      map((params : ParamMap) => params.get('search') || ''),
      debounceTime(1000),
      mergeMap((search : string) => 
        this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`))
    )
  }

}
