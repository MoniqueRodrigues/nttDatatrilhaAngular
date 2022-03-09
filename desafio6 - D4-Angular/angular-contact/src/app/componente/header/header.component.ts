import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.largura = window.screen.width
    this.responsive = this.largura < 377 ;
    console.log(window.screen.width)
  }
  responsive:boolean= false;
  largura = window.screen.width
    

  constructor() { }

  ngOnInit(): void {
    this.responsive = this.largura < 377;
  }

}
