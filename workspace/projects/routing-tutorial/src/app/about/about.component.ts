import { Component, OnInit, ViewChild, ViewContainerRef, Compiler } from '@angular/core';
import { ModuleWithComponentFactories } from '@angular/compiler/src/jit/compiler';
import { ComponentFactory } from '@angular/core/src/render3';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
    <button (click)="lazyLoad()">
      this will load the dynamic lazy in a lazy way
    </button>
    <div #container>
      in here to place the lazy component
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef})
  private _container : ViewContainerRef

  constructor(private _compiler : Compiler) { }

  ngOnInit() {
  }

  /**
   * 1. ajax call to grab the js code of the module - dynamic import
   * 2. compile the ngModule with the angular compiler
   * 3. find the factory resolver
   * 4. createComponent in ViewContainerRef
   */
  lazyLoad = async () => {
    const module = await import('../../dynamic-lazy/dynamic-lazy.module'); // Promise<Module>
    const moduleWithFactories : ModuleWithComponentFactories = await this._compiler.compileModuleAndAllComponentsAsync(module.DynamicLazyModule)
    const stamComponentfactory = 
      moduleWithFactories.componentFactories.find((factory : ComponentFactory<any>) => factory.selector === 'app-stam');
    this._container.createComponent(stamComponentfactory as ComponentFactory<any>);
  }

}
