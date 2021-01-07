import { Component, OnInit } from '@angular/core';
import {Bookdata} from '../models/book.model';
import {AuthService} from '../auth.service';
import { BooksService } from '../books.service';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book;
  id;
  bookItem = {
    
    title:'',
    author:'',
    genre:'',
    imageUrl:''

  }
  constructor(public _auth:AuthService,private router:Router,private route:ActivatedRoute,private booksService:BooksService) { }

  ngOnInit(): void {
 
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(bkId => {
      this.id = bkId;
      this.booksService.getBook(this.id).subscribe(bk => {
        this.book = bk;
   console.log(this.id)
    this. bookItem = {
    
    title:(bk['title']),
    author:(bk['author']),
    genre:(bk['genre']),
    imageUrl:(bk['imageUrl'])

  }
  
      });
    });

   
  
    }
    // editbook(){
    //   this.booksService.editbook(this.bookItem);
    //   console.log('called');
    //   alert('success');
    //   this.router.navigate(['/books/viewbooks'])
    // }
    editbook(){
      this.booksService.editbook(this.id,this.bookItem);
      console.log('book updated')
      alert('success')
      this.router.navigate(['/books/viewbooks'])
    }
  deletebook(book:any)
  {
    this.booksService.deletebook(this.id,this.bookItem);
     
        // this.book = this.book.filter(p => p !== book);
        console.log('book deleted')
      alert('successfully deleted the book')
        this.router.navigate(['/books/viewbooks']);
      
  

  }
}


