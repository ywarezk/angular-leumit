import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, mergeMap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'autocomplete-problem';
  searchSubject : Subject<string> = new Subject();
  todoItemsResult$ : Observable<any>

  constructor(private _httpClient: HttpClient) {}

  searchTasks = (event) => {
    const searchString: string = event.target.value;
    //console.log(searchString);
    this.searchSubject.next(searchString);
  }

  ngOnInit() {
    this.todoItemsResult$ = this.searchSubject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((search : string) => {
        return this._httpClient.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)
      }),
      // map() // transform the json to instance of a class
    )
  }

  ngOnDestroy() {
    
  }
}
