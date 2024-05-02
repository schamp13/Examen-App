import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen-screen',
  templateUrl: './examen-screen.component.html',
  styleUrls: ['./examen-screen.component.scss']
})
export class ExamenScreenComponent implements OnInit{
  public isGramatica:boolean = true;
  public isLectura: boolean = false;
  public isAudio: boolean = false;

  constructor(
    private Router:Router,
  ) {}

  ngOnInit(): void {

  }

  moveResultados(){
    this.Router.navigate(["resultado"])
  }

  valGramatica(){
    this.isGramatica = true;
    this.isLectura = false;
    this.isAudio = false;
  }

  valLectura(){
    this.isGramatica = false;
    this.isLectura = true;
    this.isAudio = false;
  }

  valAudio(){
    this.isGramatica = false;
    this.isLectura = false;
    this.isAudio = true;
  }
}
