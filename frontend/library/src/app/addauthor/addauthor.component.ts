import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthorsService} from '../authors.service';
import {Authordata} from '../models/author.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private authorsService:AuthorsService,
    private router:Router) { }
    authorItem= new Authordata(null,null,null,null);
  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorsService.newAuthor(this.authorItem);
    console.log('called');
    alert('successfully added new author');
    this.router.navigate(['/authors/authors'])
  }

}
