import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {pessoa} from './pessoa/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  url = 'http://localhost:3000/pessoa'; //api rest fake


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

 // Headers
 httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
 }


// Obtem todas as pessoas
  getUsers(): Observable<pessoa[]>{
    return this.httpClient.get<pessoa[]>(this.url)
      // .pipe(
      //   retry(2),
      //   catchError(this.handleError))
  }


  // Obtem uma pessoa pelo id
  getUsersById(id:number): Observable<pessoa>{
    return this.httpClient.get<pessoa>(this.url + '/' + id);
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // )
  }

  //salva uma pessoa
  SaveUsers(pessoa:pessoa):Observable<pessoa>{
    return this.httpClient.post<pessoa>(this.url,JSON.stringify(pessoa),this.httpOptions)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // )

  }


  //atualiza uma pessoa
  updateUser(pessoa:pessoa):Observable<pessoa>{
    return this. httpClient.put<pessoa>(this.url + '/' + pessoa.id, JSON.stringify(pessoa),this.httpOptions)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }


  //deleta uma pessoa
  deleteUser(pessoa:pessoa){
    return this.httpClient.delete<pessoa>(this.url + '/' + pessoa.id, this.httpOptions)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }
  
   
  
}
