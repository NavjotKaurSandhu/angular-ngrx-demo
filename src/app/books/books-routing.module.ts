import { BookListComponent } from "./book-list/book-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BookComponent } from "./book/book.component";

const bookRoutes: Routes = [
  {
    path: "",
    component: BookListComponent,
  },
  {
    path: ':bookId',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
