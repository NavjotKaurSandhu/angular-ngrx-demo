import { BookListComponent } from "./book-list/book-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const bookRoutes: Routes = [
  {
    path: "",
    component: BookListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
