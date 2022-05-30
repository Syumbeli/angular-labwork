import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }

  id: number | undefined;
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

  ngOnInit(): void {
    this.getBook()
  }

  getBook() {
    const book = this.http.get('http://localhost:8000/book/' + this.id);
    book.subscribe((data:any)=>{
      this.book = data.book;
    })
  }
}
