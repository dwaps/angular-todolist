import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksList: Book[] = [
    {
      title: 'Il était une fois',
      author: 'Michael CORNILLON',
      image: 'http://lorempixel.com/640/480/abstract',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorem, delectus nostrum veniam et, suscipit explicabo nihil unde minus, quos deserunt porro labore eius voluptates laboriosam perspiciatis facilis ratione!',
    },
    {
      title: 'Biographie contemporaine',
      author: 'Daphné CORNILLON',
      image: 'http://lorempixel.com/640/480/abstract',
      summary: 'Suscipit explicabo nihil unde minus, quos deserunt porro labore eius voluptates laboriosam perspiciatis facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorem, delectus nostrum veniam.',
    },
    {
      title: 'Essai sur la notion de liberté',
      author: 'Clémence CORNILLON',
      image: 'http://lorempixel.com/640/480/abstract',
      summary: 'Quos deserunt porro labore eius voluptates laboriosam perspiciatis facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic dolorem, delectus nostrum veniam.',
    }
  ]

  selectedBook: Book;

  constructor() { }

  public selectBook(index: number) {
    this.selectedBook = this.booksList[index];
    console.log(this.selectedBook);
  }
}
