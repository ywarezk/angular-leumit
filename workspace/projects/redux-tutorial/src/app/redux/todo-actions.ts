// Actions in Redux

// describes what is happening in our app
// class the implemnts the Action interface

import { Action } from '@ngrx/store';

// every action is a class with type property
// type is string
// type represents the id of the action

// optional: action can have a payload

export class Insert implements Action {
    static TYPE = '[todo] Insert'
    readonly type = Insert.TYPE;

    constructor(public task : string) {}
}

export class Remove implements Action {
    static TYPE = '[todo] Remove';
    readonly type = Remove.TYPE;

    constructor(public id : number) {}
}

export type TodoActions = Insert | Remove;
