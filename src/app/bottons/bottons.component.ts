import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottons',
  templateUrl: './bottons.component.html',
  styleUrls: ['./bottons.component.scss']
})
export class BottonsComponent implements OnInit {

  MyButton = true;
  EnableButton = false;
  DisableButton = true;

  toggleMyButton = () => {
    this.MyButton = ! this.MyButton;
    this.EnableButton = ! this.EnableButton;
    this.DisableButton = ! this.DisableButton;
  }
  constructor() { }

  ngOnInit() {
  }

}
