import { Component, OnInit } from '@angular/core';
import {Bookdata} from '../models/book.model';
import { BooksService } from '../books.service';
import { ActivatedRoute,Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private booksService:BooksService) { }
  title:String="Books";
  books:Bookdata[];
  book;
  
  

  ngOnInit(): void {
    


    this.booksService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
       
    })
  
  }
 
  // editbook(book:any)
  // {
  //   localStorage.setItem("editBookId", book._id.toString());
  //   this.router.navigate(['updatebook']);

  // }

}
