import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private http: HttpClient) {}
  book: {
    'name': string,
    'description': string,
    'genre': string,
    'image': string,
    'authorFullName': string
  } = {
    'name': 'test',
    'genre': 'test',
    'description': 'test',
    'image': 'test',
    'authorFullName': 'test'
  }

  ngOnInit(): void {
  }

  send(book: any) {
    this.http.post(`http://localhost:8000/book`, {'book': book }).subscribe();
  }
}
