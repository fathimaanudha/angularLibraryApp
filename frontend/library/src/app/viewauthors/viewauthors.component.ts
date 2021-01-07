import { Component, OnInit } from '@angular/core';
import {Authordata} from '../models/author.model';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-viewauthors',
  templateUrl: './viewauthors.component.html',
  styleUrls: ['./viewauthors.component.css']
})
export class ViewauthorsComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private authorsService:AuthorsService) { }
  title:String="Authors";
  authors:Authordata[];
  author;
  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

}
