import { BooksRoutingModule } from './books-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
})
export class BooksModule { }
