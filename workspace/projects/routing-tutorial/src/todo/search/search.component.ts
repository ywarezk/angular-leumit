import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  template: `
    <form>
      <input type="search" (input)="search($event)" />
    </form>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  search = (event) => {
    const searchString = event.target.value;
    this._router.navigateByUrl(`/todo?search=${searchString}`);
  }

}
