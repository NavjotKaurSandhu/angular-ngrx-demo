import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Book } from "../../models/book.model";
import { BookService } from "../../services/books/book.service";
import * as bookActions from "../actions/books.action";

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private bookService: BookService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.LOAD_BOOKS),
      mergeMap(() =>
        this.bookService.getBookList().pipe(
          map((books: Book[]) => (new bookActions.LoadBooksSuccess(books))),
          catchError((error) => of(new bookActions.LoadBooksFail(error)))
        )
      )
    )
  );
}
