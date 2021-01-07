import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import {map} from "rxjs/operators";
import { AuthorsService } from '../authors.service';
@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
author;
id;
  constructor(private router:Router,private route:ActivatedRoute,private authorsService:AuthorsService) { }
  authorItem = {
    
    name:'',
    genre:'',
    works:'',
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
      this.authorsService.getAuthor(this.id).subscribe(bk => {
        this.author = bk;
        console.log(this.id)
        this.authorItem = {
    
          name:(bk['name']),
          genre:(bk['genre']),
          works:(bk['works']),
          imageUrl:(bk['imageUl'])
      
        }
  
      });
    });

   
  
    }
   editAuthor()
    {    
      this.authorsService.editAuthor(this.id,this.authorItem);   
      alert("Author Updated");
      this.router.navigate(['/authors/authors']);
    
  }

}
