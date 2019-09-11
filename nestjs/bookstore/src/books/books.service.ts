import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {

  books = BOOKS;

  getBooks(): Promise<any>{
    return new Promise(resolve => {
      resolve(this.books);
    })
  }

  getBook(bookId): Promise<any>{
    let id = Number(bookId);

    return new Promise(resolve => {
      const book = this.books.find(book => book.id === id);

      if(!book){
        throw new HttpException('Book does not exisit', 404);
      }

      resolve(book);

    })
  }

  addBook(book): Promise<any>{
    return new Promise(resolve => {
      this.books.push(book);
      console.log(book);
      resolve(this.books);
    })
  }

  deleteBook(bookID): Promise<any>{

    let id = Number(bookID);
    return new Promise(resolve => {
      let bookIndex = this.books.findIndex(book => book.id === id);

      if(bookIndex === -1){
        throw new HttpException('Book does not exisit', 404);
      }
      this.books.splice(1, bookIndex);
      resolve(this.books);
    });

  }
}
