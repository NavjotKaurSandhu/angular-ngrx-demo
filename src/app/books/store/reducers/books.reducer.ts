import * as fromBooks from "../actions/books.action";
import { Book } from "../../models/book.model";

export interface BookState {
  data: Book[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: BookState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action?: fromBooks.BookAction
): BookState {

  switch (action?.type) {
    case fromBooks.LOAD_BOOKS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromBooks.LOAD_BOOKS_SUCCESS: {
      const data = action?.payload
      return {
        ...state,
        loaded: true,
        loading: false,
        data
      };
    }
    case fromBooks.LOAD_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    default: {
        return {
            ...state,
            ...initialState
        }
    }
  }
}


export const getBooksLoading = (state: BookState) => state.loading;
export const getBooksLoaded = (state: BookState) => state.loaded;
export const getBookList = (state: BookState) => state.data;