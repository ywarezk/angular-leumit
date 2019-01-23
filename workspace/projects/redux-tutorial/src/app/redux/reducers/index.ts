// ActionReducerMap

// map the state to chunks where chunk a reducer is in charge

import {ActionReducerMap} from '@ngrx/store';
import { ITodo, todoReducer } from './todo-reducers';
import { todoServerReducer, ITodoServerState } from './todo-server-reducer';
import {routerReducer, BaseRouterStoreState, SerializedRouterStateSnapshot} from '@ngrx/router-store';


export interface EntireState{
    todo : ITodo,
    todoServer: ITodoServerState,
    router : any
}

export const ourTodoReducerMap : ActionReducerMap<EntireState> = {
    todo: todoReducer,
    todoServer: todoServerReducer,
    router: routerReducer
}