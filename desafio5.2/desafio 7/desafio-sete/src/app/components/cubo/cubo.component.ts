import { Component, Input,OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent{
  @Input() valor2:number = 0;


  constructor(private router: Router)

  {  
 
       this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
      // this.valor2= this.router.getCurrentNavigation()?.extras.state?.['valorRota'];


      console.log("mostraValor", this.valor2)
      console.log( "oi", this.router.getCurrentNavigation()?.extras.state?.['valorRota'])
                  
  }
  // OnInit() { this.valor2}
  
 
}
