import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toogle-css',
  templateUrl: './toogle-css.component.html',
  styleUrls: ['./toogle-css.component.scss']
})
export class ToogleCssComponent implements OnInit {

  h1Style = false;
  pStyle = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStyles(){
    // console.log('clicked');
    this.h1Style = !this.h1Style;
    this.pStyle = !this.pStyle;
  }

}
