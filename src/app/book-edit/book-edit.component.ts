import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  private routeSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.routeSubscription = route.params.subscribe(params=>this.itemId=params['id']);
  }

  itemId: number | undefined;
  book: {
    'id': number,
    'name': string,
    'description': string,
    'genre': string,
    'image': string,
    'authorFullName': string
  } = {
    'id': 0,
    'name': 'test',
    'genre': 'test',
    'description': 'test',
    'image': 'test',
    'authorFullName': 'test'
  }


  getBookById() {
    const book = this.http.get('http://localhost:8000/book/' + this.itemId);
    book.subscribe((data:any)=>{
      this.book = data.book;
    })
  }

  ngOnInit(): void {
    this.getBookById();
  }

  send(book: any) {
    this.http.put(`http://localhost:8000/book/${this.itemId}`, {'book': book }).subscribe();
  }
}
