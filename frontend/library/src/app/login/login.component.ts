import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators} from '@angular/forms';
// import {InterceptorService} from '../interceptor.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username:'',
    password:'',
    
  };
  uname:'admin@gmail.com'
  pwd:'Admin.123'

  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  message:string;
  invalidLogin = false;



  // loginUser () {
    
  //   this._auth.loginUser(this.user)
  //   .subscribe(
  //     res => {
  //       // localStorage.setItem('token', res.token)
  //       this._router.navigate(['/books'])
  //     },
  //     err => {
  //       // console.log(err);
  //       this._router.navigate(['/login'])
  //     }
  //   ) 
  // }









  userVerify(){
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token',res.token)
          this._router.navigate(['/'])
          
      },
      err => {
        console.log(err);
        alert('invaliduser or password')
        this._router.navigate(['/login'])
      }
 
    ) 

  }
 
  adminVerify(){
    this._auth.loginAdmin(this.uname,this.pwd)
    .subscribe(
      res => {
        localStorage.setItem('tokena',res.token)
          this._router.navigate(['/'])
      })
      err => {
        console.log(err);
        // alert('err')
        this._router.navigate(['/login'])
      }
      
  //     // err => {
      //   console.log(err);
      //   alert("Invalid user or password, Try with valid credentials")
        
      // }
    
    // var error=this.interceptor.handleError
    // if(error){
    //   alert('Invalid user or password!!!')
    //   this._router.navigate(['login'])
    // }else

    // {alert('sucessful')}
  }
}


