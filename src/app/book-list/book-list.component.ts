import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  books: {
    'id': number,
    'name': string,
    'description': string,
    'genre': string,
    'image': string,
    'authorFullName': string
  }[] = [{
    'id': 0,
    'name': 'test',
    'genre': 'test',
    'description': 'test',
    'image': 'test',
    'authorFullName': 'test'
  }, {
    'id': 0,
    'name': 'test',
    'genre': 'test',
    'description': 'test',
    'image': 'test',
    'authorFullName': 'test'
  }, {
    'id': 0,
    'name': 'test',
    'genre': 'test',
    'description': 'test',
    'image': 'test',
    'authorFullName': 'test'
  }, {
    'id': 0,
    'name': 'test',
    'genre': 'test',
    'description': 'test',
    'image': 'test',
    'authorFullName': 'test'
  }]

  getData() {
    this.http.get('http://localhost:8000/book/').subscribe((data:any) => {
      for (let book of data.books) {
        this.books.push(book)
      }
    });
  }

  ngOnInit(): void {
    this.getData()
  }

  navigateToBook(book: any) {
    this.router.navigate(['/item', book.id]).then(() => {});
  }
}
