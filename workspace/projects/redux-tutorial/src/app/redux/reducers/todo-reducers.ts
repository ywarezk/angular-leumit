// Reducers

// Reducers decide based on the current state and the action what will be the next state
// reducers are variables of type ActionReducer
import {ActionReducer, ActionReducerMap} from '@ngrx/store';
import { Insert, TodoActions, Remove } from '../todo-actions';

export interface ITodo {
    tasks: string[]
}

// we use the reducers to also set the initial state of every reducer
const initialState: ITodo = {
    tasks: []
}

export const todoReducer : ActionReducer<ITodo, TodoActions> = (state : ITodo = initialState, action : TodoActions) => {
    let newState = {...state};
    newState.tasks = [...state.tasks];
    
    switch(action.type) {
        case Insert.TYPE:
            // do something to return new state
            newState.tasks.push((action as Insert).task);
            return newState;
        case Remove.TYPE:
            // do something to return new state
            newState.tasks = newState.tasks.splice((<Remove>action).id, 1)
            return newState;
        default:
            return state;
    }
}

