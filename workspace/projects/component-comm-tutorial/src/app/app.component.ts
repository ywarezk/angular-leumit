import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';
import { MessageService } from './message.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'component-comm-tutorial';
  messageToChild = 'hello from parent';
  messageObjToChild = {foo: 'bar'}
  msgFromChild = '';
  @ViewChild('childInstance') thisWillContainChildInstance : ChildComponent;

  constructor(private _msgService : MessageService) {}

  ngOnInit() {
    this._msgService.bus.subscribe((msgFromChild: string) => {
      this.msgFromChild = msgFromChild;
    });

    setTimeout(() => {
      console.log('we will change the input properties');

      //this.messageToChild = 'foo bar';
      this.messageObjToChild['foo'] = 'hello world from object'
      this.messageObjToChild['yariv'] = 'katz';

      // this.messageObjToChild = {'foo': 'hello world from object'}
    }, 2000);
  }

  ngAfterViewInit() {
    // this lifecycle hook will be called once
    // @ViewChild will be populated
    // after the view of me and my children is placed
    this.thisWillContainChildInstance.giveMeAString();
  }
}
