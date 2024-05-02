import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit{

  constructor(private router: Router,){

  }
  ngOnInit(): void {

  }

  regresar(){

  }

  registrar(){
    this.router.navigate(["login"])
  }
}
