import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  book;
  id;
  
  constructor(private router:Router,private route:ActivatedRoute,private booksService:BooksService)  { }

  bookItem = {
    
    title:'',
    author:'',
    genre:'',
    imageUrl:''

  }
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

}
