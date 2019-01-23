/**
 * This will contain reducer
 * with a list of todos
 * we will use @ngrx/entity to help us manage list of todos
 */

import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { TodoActions, Insert, Remove } from '../todo-actions';

// our state extends entitystate with ids and entities
 export interface ITodoEntity extends EntityState<string> {
     isLoading : boolean;
 }

 // adapter
// to manage the ids and entities in our state
// i can add to the entites
// remove, update, updateMany
const adapter: EntityAdapter<string> = createEntityAdapter<string>();

// const initialState = {
//     isLoading: true,
//     entites: {

//     }
// }

const initialState = adapter.getInitialState({
    isLoading: false
})

export const todoReducer : ActionReducer<ITodoEntity, TodoActions> = (state : ITodoEntity = initialState, action : TodoActions) => {
    switch(action.type) {
        case Insert.TYPE:
            return adapter.addOne((action as Insert).task, state);
        case Remove.TYPE:
            return adapter.removeOne((action as Remove).id, state);
        default: 
            return state;
    }
}