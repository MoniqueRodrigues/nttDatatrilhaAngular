import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service'; 
import {pessoa} from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {
  pessoas:pessoa[]

  //definindo o metodo set:
  setUsers(pessoa:pessoa){
    this.pessoaService.setUsers(pessoa);
    window.alert('Seu dado foi adicionado com sucesso!')

  }

  //definindo o metodo delete:
  deleteUser(pessoa:pessoa){
    this.pessoas = this.pessoaService.deleteUser(pessoa.id);
    window.alert('Seu dado foi deletado com sucesso!')
  }




  //injetando o service:
  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
  ) {
      this.pessoas = pessoaService.getUsers();
      console.log(this.pessoas)

    pessoaService.getUsersById(2);
    

   }

  ngOnInit(): void {
 
  }

}
