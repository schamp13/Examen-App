import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-screen',
  templateUrl: './resultado-screen.component.html',
  styleUrls: ['./resultado-screen.component.scss']
})
export class ResultadoScreenComponent implements OnInit{


  constructor(
    private Router:Router,
  ) {}

  ngOnInit(): void {

  }

  moveHome(){
    this.Router.navigate([""])
  }
}
