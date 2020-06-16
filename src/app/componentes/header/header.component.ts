import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public fragment:String;
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      console.log(this.fragment);
    });
   }
}
