import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookCreateComponent} from "./book-create/book-create.component";

const routes: Routes = [
  { path: '*', component: AppComponent },
  { path: 'books', component: BookListComponent },
  { path: 'item/:id', component: BookComponent },
  { path: 'item/:id/edit', component: BookEditComponent },
  { path: 'book/create', component: BookCreateComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
