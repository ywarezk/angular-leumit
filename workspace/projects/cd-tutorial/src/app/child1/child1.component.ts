import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works! {{isCdRunning()}}
    </p>
    <button (click)="stam = $event"> child1 - is CD working?</button>
    <app-gran1></app-gran1>
  `,
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCdRunning = () => {
    console.log('child1 CD');
  }

}
