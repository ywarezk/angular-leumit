// Actions relating to the todoServer chunk

import {Action} from '@ngrx/store';

export class ToggleLoading implements Action {
    static TYPE = '[todoServer] ToggleLoading';
    readonly type = ToggleLoading.TYPE;

    constructor(public isLoading: boolean) {}
}

export class SetError implements Action {
    static TYPE = '[todoServer] SetError';
    readonly type = SetError.TYPE;

    constructor(public error : Error) {}
}

export class SetTasks implements Action {
    static TYPE = '[todoServer] SetTasks';
    readonly type = SetTasks.TYPE;

    constructor(public tasks : any[]) {}
}

export type TodoServerAction = SetTasks | SetError | ToggleLoading;
