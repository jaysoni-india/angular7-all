import { Component } from '@angular/core';

@Component({
      selector : 'app-as2',
      templateUrl : './as2.component.html',
      styles : ['']
})

export class As2Component{

  inputString: (string) =  '';

  showPara: (boolean) = false;

  constructor(){

    this.showPara = confirm('Show Para');
  }

  ngInit(){
  }

}
