import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service'; 
import {pessoa} from './pessoa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas:pessoa[] = [];




  // defini se a pessoa será criada ou atualizada
  SaveUsers(pessoa:pessoa){
      this.pessoaService.SaveUsers(pessoa)
  }

  // deleta uma pessoa:
  deleteUser(pessoa:pessoa {
    this.pessoaService.deleteUser(pessoa).subscribe(() => {
      this.getUsers();
    });
  }







  //injetando o service:
  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) {
    this.pessoaService = pessoaService;
    pessoaService.getUsers()
      .subscribe(pes => this.pessoas = pes); 

   }

  ngOnInit(): void {
 
  }

}
