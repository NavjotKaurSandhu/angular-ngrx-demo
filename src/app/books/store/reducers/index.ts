import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromBooks from "./books.reducer";

export interface BooksState {
  books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<BooksState> = {
  books: fromBooks.reducer,
};

// Feature selector --. Hold selector for our entire lazy loaded feature
export const getBooksState = createFeatureSelector<BooksState>("appBooks");

/**
 * const state = {
 *  appBooks: { // feature module
 *    books: {
 *      data: [],
 *      loaded: false,
 *      loading: false
 *    }
 *  }
 * }
 */
