import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }
  getAuthors(){
    return this.http.get('http://localhost:3000/authors');
  }
  newAuthor(item){
    return this.http.post('http://localhost:3000/inserta',{'author':item})
    .subscribe(data=>{console.log(data)})
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/authors/"+id);
  }
  deleteAuthor(id,author)
  {

    return this.http.delete("http://localhost:3000/removea/"+id,author)
    .subscribe(data =>{console.log(data)})

  }
  editAuthor(id,author)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updatea/",+id,author)
    .subscribe(data =>{console.log(data)})
  }
}

