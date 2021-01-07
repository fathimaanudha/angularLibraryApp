import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import {map} from "rxjs/operators";
import { AuthorsService } from '../authors.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
 author;
 id;
 authorItem = {
    
  name:'',
  genre:'',
  works:'',
  imageUrl:''

}
  constructor(public _auth:AuthService,private router:Router,private route:ActivatedRoute,private authorsService:AuthorsService) { }

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
deleteAuthor(author:any){
  this.authorsService.deleteAuthor(this.id,this.authorItem);
  console.log('author deleted')
  alert('successfully deleted the author')
  this.router.navigate(['/authors/authors'])
}
}
