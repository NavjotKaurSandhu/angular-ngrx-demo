import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../home/store";
import { Book } from "../../models/book.model";
import * as fromFeature from "../reducers";
import * as fromBooks from "../reducers/books.reducer";

// Book list state ---> Hold selector for books state
export const getBookListState = createSelector(
  fromFeature.getBooksState,
  (state: fromFeature.BooksState) => state.books
);

// data: Array<any>
export const getBooksEntities = createSelector(
  getBookListState,
  fromBooks.getBookEntities
);

export const getAllBooks = createSelector(getBooksEntities, (entities) => {
  return Object.keys(entities).map((id: string) => entities[parseInt(id, 10)]);
});

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

export const getSelectedBook = createSelector(
  getBooksEntities,
  fromRoot.getRouterState,
  (entities, router): Book => {
    return router.state && entities[router.state.params["bookId"]];
  }
);
