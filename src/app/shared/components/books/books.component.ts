import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
    <div class="row">
      <div class="col-lg-4">
      <app-books-list></app-books-list>
      </div>
      <div class="col-lg-8">
        <app-book-details></app-book-details>
      </div>
    </div>
  `,
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
