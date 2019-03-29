import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {

  books: any[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.books = this.bookService.booksList;
  }

  selectBook(index: number) {
    this.bookService.selectBook(index);
  }

}
