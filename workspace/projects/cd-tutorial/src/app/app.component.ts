import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter = 0;
  title = {msg: 'foo bar'};

  constructor(private _zone : NgZone) {}

  ngOnInit() {
    // setInterval(() => {
    //   // this.counter++;
    //   console.log('timer is running')
    // }, 1000)

    setTimeout(() => {
      console.log('input change will cause CD');
      //this.title = 'hello world';
      this.title['msg'] = 'hello world';
    }, 2000);
  }

  isCdRunning() {
    console.log('App CD');
    // return Math.random()
  }
}

// setInterval(() => {
//   console.log('set interval is running');
// }, 1000);
