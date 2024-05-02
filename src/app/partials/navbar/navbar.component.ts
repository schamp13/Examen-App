import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(
    private router: Router,
  ){

  }
  ngOnInit(): void {

  }

  moveExamen(){
    this.router.navigate(["examen"])
  }

  moveLogin(){
    this.router.navigate(["login"])
  }

  moveRegistro(){
    this.router.navigate(["registro"])
  }

  moveHome(){
    this.router.navigate([""])
  }
}
