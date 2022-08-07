import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store/index';
import { BooksRoutingModule } from './books-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http' 
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { BookService } from './services/books/book.service';


@NgModule({
  declarations: [
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('appBooks', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
