import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

import * as fromStore from '../store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookDataList$?: Observable<Book[]>;

  constructor(private store: Store<fromStore.BooksState>) { }

  ngOnInit(): void {
    this.bookDataList$ = this.store.select(fromStore.getAllBooks);
    this.store.dispatch(new fromStore.LoadBooks())
  }

}
