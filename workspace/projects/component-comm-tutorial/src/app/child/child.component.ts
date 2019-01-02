import { Component, OnInit, Input, OnChanges, SimpleChanges, KeyValueDiffers, DoCheck, EventEmitter, Output, ContentChild, AfterContentInit } from '@angular/core';
import { MessageService } from '../message.service';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works! {{message}} {{messageObjFromParent?.foo}}
    </p>
    <button (click)="transferToParent()">
      click me to transfer to parent
    </button>
    <ng-content select="[header]">

    </ng-content>
    <ng-content select="[footer]">

    </ng-content>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() message : string;
  @Input('messageObj') messageObjFromParent : any

  @Output() clickEvent : EventEmitter<string> = new EventEmitter();

  @ContentChild(GrandChildComponent) grandChildInstance : GrandChildComponent;


  constructor(private _key : KeyValueDiffers, private _msgService : MessageService) { }

  ngOnInit() {
    // in this lifecycle hook im gurentted that data bound has arrived

    setTimeout(() => {
      console.log('transfer data to parent');
      this._msgService.bus.next(`new data from child: ${Math.random()}`);
    }, 2000);
  }

  ngOnChanges(changes : SimpleChanges) {
    // this should change when input bound properties change
    // what is the meaning of change ===
    // object and the reference is the same we will not call this
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    // runs every cd
    // sometime there is change detection and the component choose not to repaint itself
    // manually activate change detection
    console.log('ngDoCheck');
  }

  transferToParent() {
    this.clickEvent.emit(`hello world: ${Math.random()}`);
  }

  giveMeAString = () => {
    return 'hello TRV';
  }

  ngAfterContentInit() {
    // this will be called once
    // in this method @ContentChild members will be populated
    // ng content template data is placed
  }

}
