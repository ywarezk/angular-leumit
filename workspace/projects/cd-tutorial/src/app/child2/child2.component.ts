import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, DoCheck, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works! {{isCdRunning()}}
    </p>
    <h5>
      {{counter}}
    </h5>
    <button (click)="stam = $event"> is CD working?</button>

    <ul>
      <li *ngFor="let task of (tasks$ | async)">
        {{task.title}}
      </li>
    </ul>
    <app-gran2></app-gran2>
  `,
  styleUrls: ['./child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit, OnChanges, DoCheck {
  // is cd running when @input is changing?
  @Input() msg;
  counter = 0;

  tasks$ : Observable<any>;

  constructor(
    private _differs : KeyValueDiffers, 
    private _cd: ChangeDetectorRef,
    private _http : HttpClient
  ) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('setTimeout in child2 is running');
      this.counter++;
    }, 2000)

    // is observable will trigger cd in onpush
    // is ajax server call will trigger CD?
    this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
      // .subscribe((tasks) => {
      //   this.tasks = tasks;
      //   // this._cd.detectChanges();
      // })
    
    setTimeout(() => {
      console.log('is cd running on gran2');
      this._cd.detectChanges();
    }, 5000);

  }

  ngOnChanges() {
    console.log('on changes is running?');
  }

  ngDoCheck() {
    console.log('ngDoCheck - will this run?');

    // this._cd.detectChanges();
    // this._cd.markForCheck();
  }

  isCdRunning = () => {
    console.log('child2 CD');
  }

}
