import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    
    <button (click)="openLogin()">
      open the login popup
    </button>

    <button (click)="createDynamic()">
      this will create the dynamic component
    </button>

    <div #container>
      our dynamic component will be placed here
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  private _container : ViewContainerRef

  constructor(private _router : Router, private _resolve: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  openLogin = () => {
    //this._router.navigate(['user', 'about']); // /user/about
    this._router.navigate([{outlets: {popups: 'modals/login'}}], {
      skipLocationChange: true
    });
  }

  /**
   * this method will create our dynamic component with code.
   * 1. Where is template will our component be created? 
   * 2. grab the component factory
   * 3. createComponent
   */
  createDynamic = () => {
    const dynamicComponentFactory = this._resolve.resolveComponentFactory(DynamicComponent)
    this._container.createComponent(dynamicComponentFactory);
  }

}
