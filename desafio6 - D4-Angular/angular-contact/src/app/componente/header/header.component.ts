import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    console.log(event.target.innerWidth)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
