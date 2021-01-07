import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  
  getBooks(){
    return this.http.get('http://localhost:3000/books');
  }
  getBook(id:any){
    return this.http.get("http://localhost:3000/books/"+id);
  }
  newBook(item){
    return this.http.post('http://localhost:3000/insert',{'book':item})
    .subscribe(data=>{console.log(data)})
  }

  deletebook(id,book)
  {

    return this.http.delete("http://localhost:3000/removeb/"+id,book)
    .subscribe(data =>{console.log(data)})
  }
  editbook(id,book)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updateb/"+id,book)
    .subscribe(data =>{console.log(data)})
  }
}
