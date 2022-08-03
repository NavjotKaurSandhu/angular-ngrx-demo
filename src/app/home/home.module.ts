import { BooksModule } from './../books/books.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
