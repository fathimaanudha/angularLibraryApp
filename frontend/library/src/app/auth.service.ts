import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status:any;
  constructor(private http:HttpClient) { }




  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:3000/login", user)
  }
  loginAdmin(username:any,password:any)
  {
    return this.http.post<any>("http://localhost:3000/login", {username,password})
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  adminLoggedIn()
  {
    return !!localStorage.getItem('tokena')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  getTokena()
  {
    return localStorage.getItem('tokena')
  }

}
