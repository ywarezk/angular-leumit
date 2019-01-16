import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gran1',
  template: `
    <p>
      gran1 works! {{isCdRunning()}}
    </p>
  `,
  styleUrls: ['./gran1.component.css']
})
export class Gran1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCdRunning = () => {
    console.log('Gran1 CD');
  }

}
