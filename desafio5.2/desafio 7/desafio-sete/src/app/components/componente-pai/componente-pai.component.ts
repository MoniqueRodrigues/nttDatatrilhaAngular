import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-pai',
  template: ""

})

export class ComponentePaiComponent {

  @Input() numeroComponent: number = 0;
  newRouter : Router;


  constructor(private router: Router) {  
    this.newRouter =  router;
  }




  isPar(valor: number): string {
    return valor % 2 === 0 ? "par" : "impar";

  }

  isPrimo(valor: number): string {

    let cont = valor - 1;
    
    if(valor === 1){
      return "não é primo"
    }

    for (let i = cont; i >= 2; i--) {
   
      if (valor % i === 0) {
        return "não é primo"

      }
    }   
    return "é primo"
  }

}









