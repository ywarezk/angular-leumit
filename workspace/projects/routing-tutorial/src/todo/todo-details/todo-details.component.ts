import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  template: `
    <p>
      {{(task$ | async).title}}
    </p>
  `,
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  task$ : Observable<any>

  // /todo/1
  // /todo/2
  // /todo/:id/:slug
  // we need to catch the id from the url
  // based on that id make a server call
  constructor(private _activatedRoute : ActivatedRoute, private _http : HttpClient) { }

  ngOnInit() {

    // from the param map i want to grab the id
    // from the id make ajax call and replace the observable with ajax call

    this.task$ = this._activatedRoute.paramMap.pipe(
      map((params : ParamMap) => params.get('id')),
      mergeMap((id : string) => this._http.get(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`))
    )
  }

}
