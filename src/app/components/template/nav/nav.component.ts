import { Component,  OnInit, HostListener, ViewChild, ElementRef  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @ViewChild('nav') myNav!:ElementRef;

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 1.5) {
      $(".sidenav").addClass("randomClass")
    } else {
      $(".sidenav").removeClass("randomClass")
    }
  }

}

