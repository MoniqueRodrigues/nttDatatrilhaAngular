import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent implements OnInit {

nome:string= 'Monique Rodrigues';
guia:string=  'Danillo Tonieti Castro'
today:number = Date.now();
turma:string= "Não possuo turma";



  constructor() { }

  ngOnInit(): void {
  }

}
