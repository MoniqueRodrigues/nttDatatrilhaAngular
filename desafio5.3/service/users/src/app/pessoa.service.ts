import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import {pessoa} from './pessoa/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  dados: pessoa[] = [
    new pessoa(1,"Mo",39),
    new pessoa(2,"Ivan",36),
    new pessoa(3,"Jú", 7)
  ];
  
  constructor(http: HttpClient) {}

  getUsers(){
    return this.dados;
  }


  getUsersById(userId:number){
    this.dados=  this.dados.filter(dado => dado.id === userId)
    console.log("dadosCapturados",this.dados)
    return this.dados;

  }

  deleteUser(userId:number){
    this.dados=  this.dados.filter(dado => dado.id != userId)
    console.log("dadosExcluidos",this.dados)
    return this.dados;
  }

  setUsers(pessoa:pessoa){
    this.dados.push(pessoa);
    console.log("dados",this.dados)
  }
}
