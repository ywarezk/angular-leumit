import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gran2',
  template: `
    <p>
      gran2 works! {{isCdRunning()}}
    </p>
    <button (click)="stam = $event"> gran2 - is CD working?</button>
  `,
  styleUrls: ['./gran2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gran2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCdRunning = () => {
    console.log('Gran2 CD');
  }

}
