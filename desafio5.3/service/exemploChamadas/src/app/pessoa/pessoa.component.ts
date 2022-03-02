import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service'; 
import {pessoa} from './pessoa';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas:pessoa[] = [];  
  pessu:pessoa = new pessoa(0, "Sogra", 63)

  constructor (private pessoaService: PessoaService){

  }

  //inicia o carregamento
  ngOnInit(){
    this.pessoaService.getUsers().subscribe(arrayPessoa => this.pessoas = arrayPessoa);
    this.pessoaService.saveUsers(this.pessu).subscribe()
   

  }

   // defini se a pessoa será criada ou atualizada
   saveUsers(pessoa:pessoa){
    this.pessoaService.saveUsers(pessoa).subscribe()
   }


    // Chama o serviço para obtém todas as pessoas
    getUsers(){
      this.pessoaService.getUsers().subscribe((pessoas:pessoa[])=>{
        this.pessoas = pessoas;
      })
    }

    // deleta uma pessoa
    deleteUser(pessoas:pessoa){
      this.pessoaService.deleteUser(pessoas).subscribe(()=>{
        this.getUsers();
      })

    }
  
}
