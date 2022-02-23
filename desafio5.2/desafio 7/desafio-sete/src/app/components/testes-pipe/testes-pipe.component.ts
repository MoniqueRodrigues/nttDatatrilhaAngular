import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent implements OnInit {
  newDate = new Date(2021,9,21);
  valor: number= 35;  

  porcentagem: number= 0.8465;               //84.65 / 100
 
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
