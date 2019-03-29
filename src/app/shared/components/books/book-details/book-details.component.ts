import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {

  book: any;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.book = this.bookService.selectedBook;
  }

}
