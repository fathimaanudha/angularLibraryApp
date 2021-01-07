import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  newUser(item){
    
    return this.http.post('http://localhost:3000/adduser',{'user':item})
    .subscribe(data=>{console.log(data)})
  }
}
