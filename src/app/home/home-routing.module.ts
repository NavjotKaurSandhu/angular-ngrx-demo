import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "books",
        pathMatch: "full",
      },
      {
        path: "books",
        loadChildren: () =>
          import("../books/books.module").then((m) => m.BooksModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
