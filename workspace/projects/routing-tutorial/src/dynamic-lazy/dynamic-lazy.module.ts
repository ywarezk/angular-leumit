import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StamComponent } from './stam/stam.component';

@NgModule({
  declarations: [StamComponent],
  imports: [
    CommonModule
  ]
})
export class DynamicLazyModule { }
