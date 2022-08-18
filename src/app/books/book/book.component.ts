import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

import * as fromStore from '../store';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book$!: Observable<Book>;

  constructor(private store: Store<fromStore.BooksState>) { }

  ngOnInit(): void {
    this.book$ = this.store.select(fromStore.getSelectedBook);
  }

  addNewBook() {
    
  }
}
