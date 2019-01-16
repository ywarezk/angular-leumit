// ActionReducerMap

// map the state to chunks where chunk a reducer is in charge

import {ActionReducerMap} from '@ngrx/store';
import { ITodo, todoReducer } from './todo-reducers';
import { todoServerReducer, ITodoServerState } from './todo-server-reducer';


export interface EntireState{
    todo : ITodo,
    todoServer: ITodoServerState
}

export const ourTodoReducerMap : ActionReducerMap<EntireState> = {
    todo: todoReducer,
    todoServer: todoServerReducer
}