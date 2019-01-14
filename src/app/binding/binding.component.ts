import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html'
})

export class BindingComponent {

        username: (string) = '';
        usernames = [];

        constructor() {
          if ( localStorage.getItem('ar') != null ) {
            this.usernames = JSON.parse(localStorage.getItem('ar'));
          }
        }

        addUserName() {
          if ( this.usernames.indexOf(this.username) === -1) {
                  this.usernames.push(this.username);
          } else {
                alert(this.username + ' already exists in list');
                this.username = '';
          }
        }

        deleteUserNames() {
          this.usernames = [];
        }

        saveToLocalStorage() {
          localStorage.setItem('ar', JSON.stringify(this.usernames));
        }



}
