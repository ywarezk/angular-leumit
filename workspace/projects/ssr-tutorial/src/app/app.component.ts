import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssr-tutorial';

  constructor(@Inject(PLATFORM_ID) private _platformId) {}

  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      document.getElementById('container');
    }
  }
}
