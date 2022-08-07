import { Action } from "@ngrx/store";
import { Book } from "../../models/book.model";

// Load books
export const LOAD_BOOKS = "[Books] Load Books";
export const LOAD_BOOKS_SUCCESS = "[Books] Load Books Success";
export const LOAD_BOOKS_FAIL= "[Books] Load Books Fail";

export class LoadBooks implements Action {
    readonly type: string = LOAD_BOOKS;

    constructor(public payload?: any) {}
}

export class LoadBooksSuccess implements Action {
    readonly type: string = LOAD_BOOKS_SUCCESS;

    constructor(public payload?: Book[]) {}
}

export class LoadBooksFail implements Action {
    readonly type: string = LOAD_BOOKS_FAIL;

    constructor(public payload?: any) {}
}

// Action types
export type BookAction = LoadBooks | LoadBooksSuccess | LoadBooksFail;