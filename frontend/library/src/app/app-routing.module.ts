import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import {Bookdata} from './models/book.model';


import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ViewauthorsComponent } from './viewauthors/viewauthors.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
// var boooks:Bookdata[];
const routes: Routes = [{path:'',component:HomeComponent},
{
  path:'login',
  component:LoginComponent
},

{
path:'signup',
component:SignupComponent
},
{
  path:'book/:id',
  canActivate: [AuthGuard],
  component:BookComponent
  },
  {
    path:'author/:id',
    canActivate: [AuthGuard],
    component:AuthorComponent
    },
  {
    path:'updateb/:id',
    canActivate: [AdminGuard],
    component:UpdatebookComponent
    },
    {
      path:'updatea/:id',
      canActivate: [AdminGuard],
      component:UpdateauthorComponent
      },
    
{
  path:'books',
  canActivate: [AuthGuard],
  component:ViewbooksComponent,
    children:[
      {
        path:'viewbooks',
        canActivate: [AuthGuard],
        component:BooksComponent
          
    },
      {
        path:'addbook',
        canActivate: [AdminGuard],
        component:AddbookComponent
      }
    ]
},
{
  path:'authors',
  canActivate: [AuthGuard],
  component:AuthorsComponent,
    children:[
      {
        path:'authors',
        canActivate: [AuthGuard],
        component:ViewauthorsComponent
        
    },
      {
        path:'addauthor',
        canActivate: [AdminGuard],
        component:AddauthorComponent}
    ]
},
{
  path:'logout',component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
