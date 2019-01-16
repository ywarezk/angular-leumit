import {ActionReducer} from '@ngrx/store';
import { TodoServerAction, SetTasks, SetError, ToggleLoading } from '../todo-server-action';

export interface ITodoServerState {
    tasksServer : any[];
    isLoading : boolean;
    error : Error
}

const initialState: ITodoServerState = {
    tasksServer: [],
    isLoading: false,
    error: null
}

export const todoServerReducer : ActionReducer<ITodoServerState, TodoServerAction> = 
    (state : ITodoServerState = initialState, action : TodoServerAction) => {
        switch(action.type) {
            case SetTasks.TYPE:
                return {...state, tasksServer: (<SetTasks>action).tasks};
            case SetError.TYPE:
                return {...state, error: (<SetError>action).error};
            case ToggleLoading.TYPE:
                return {...state, isLoading: (<ToggleLoading>action).isLoading}
            default:
                return state;
        }
    }