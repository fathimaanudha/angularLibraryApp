import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService {

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any)
  {
    let authService = this.injector.get(AuthService)
    let tokenizedReqa= req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getTokena()}`
        }
        
      }
    )
    return nxt.handle(tokenizedReqa)

  }
}
