import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  constructor(public _auth:AuthService) { }

  ngOnInit(): void {
  }

}
