import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {StoreModule} from '@ngrx/store';
import { ourTodoReducerMap } from './redux/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import { TodoService } from './todo.service';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { RouterModule } from '@angular/router';

// store
// is holding our state
// there is one store in a redux application
// to create the store we need to pass the ActionReducerMap


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(ourTodoReducerMap),
    StoreDevtoolsModule.instrument({}),
    HttpClientModule,
    EffectsModule.forRoot([
      TodoService
    ]),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
