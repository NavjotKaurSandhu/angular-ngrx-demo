import * as fromBooks from "../actions/books.action";
import { Book } from "../../models/book.model";

export interface BookState {
  entities: { [id: number]: Book };
  loaded: boolean;
  loading: boolean;
}

export const initialState: BookState = {
  entities: {},
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
      const books = action?.payload;
      const entities = books.reduce(
        (dataEntities: { [id: number]: Book }, book: Book) => {
          const bookId: any = book?.id;
          return {
            ...dataEntities,
            [bookId]: book,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
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
      return state;
    }
  }
}

export const getBooksLoading = (state: BookState) => state.loading;
export const getBooksLoaded = (state: BookState) => state.loaded;
export const getBookEntities = (state: BookState) => state.entities;
