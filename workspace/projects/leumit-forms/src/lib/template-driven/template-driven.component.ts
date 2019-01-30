import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'lib-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('noSeenBinding') 
  myNoBinding : NgModel;

  todo : string = 'hello'; 
  todo2 : string = 'init'; 

  constructor() { }

  ngOnInit() {
  }

  handleSubmitNgFormExample = (f : NgForm) => {
    console.log(f.controls.val1.value);
  }

}
