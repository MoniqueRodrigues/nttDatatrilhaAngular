import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Contact} from '../models/contact'


@Injectable({
  providedIn: 'root'
})
export class ContactService {
    url= 'http://localhost:3000/contact-us'//// api rest fake

    // injetando o HttpClient
    constructor( private httpClient:HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  //salvar dados:
  onSubmit(contact:Contact):Observable<Contact> {
  return this.httpClient.post<Contact>(this.url,contact,this.httpOptions)
  }
}
