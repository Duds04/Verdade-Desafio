import { HeaderService } from './../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AnyService } from '../../services/any.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private anyService: AnyService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

  explicacao(){
    if($(".explicacao").hasClass("d-none")){
      $(".explicacao").removeClass("d-none")
    }else{
      $(".explicacao").addClass("d-none")
    }
  }

  regras(){
    this.anyService.showMessage('É só seguir o que as cartas mandam!')
  }

}
