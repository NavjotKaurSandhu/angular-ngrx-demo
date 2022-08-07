import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
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

// Book list state ---> Hold selector for books state
export const getBookListState = createSelector(
  getBooksState,
  (state: BooksState) => state.books
);

// data: Array<any>
export const getAllBooks = createSelector(
  getBookListState,
  fromBooks.getBookList
);

// loaded: boolean
export const getBooksLoaded = createSelector(
  getBookListState,
  fromBooks.getBooksLoaded
);

// loading: boolean
export const getBooksLoading = createSelector(
  getBookListState,
  fromBooks.getBooksLoading
);
