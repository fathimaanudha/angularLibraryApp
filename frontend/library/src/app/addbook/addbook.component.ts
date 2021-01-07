import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Bookdata } from '../models/book.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  

  constructor(private booksService:BooksService,private router: Router) { }
  bookItem = new Bookdata(null,null,null,null,null);

  ngOnInit(): void {
  }
  AddBook(){
    this.booksService.newBook(this.bookItem);
    console.log('called');
    alert('success');
    this.router.navigate(['/books/viewbooks'])
  }

}
