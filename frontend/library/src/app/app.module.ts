import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHandler, HttpEvent} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewauthorsComponent } from './viewauthors/viewauthors.component';
import {AuthService} from './auth.service';
import {BooksService} from './books.service';
import {AuthorsService} from './authors.service';
import {PvalidatorService} from './pvalidator.service';
import { TokenInterceptorService } from './token-interceptor.service';
// import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    AuthorsComponent,
    AuthorComponent,
    BookComponent,
    AddbookComponent,
    AddauthorComponent,
    UpdatebookComponent,
    UpdateauthorComponent,
    ViewbooksComponent,
    ViewauthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    AuthService,BooksService,AuthorsService,PvalidatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
