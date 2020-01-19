import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

    controller: any;
    firstName: string;
    lastName: string;

    constructor() { }

  ngOnInit() {
    this.controller  = document.querySelector('ion-alert-controller');

  }


    processForm(event) {
     if (this.firstName != null && this.lastName != null) {
      this.controller.create({
        header: 'Account Created',
        message: `Created account for: <b>${this.firstName} ${this.lastName}</b>`,
        buttons: [{
          text: 'OK'
        }]
      }).then(alert => alert.present());
     } else {
      this.controller.create({
        header: 'Account Not Created',
        message: `fields are required`,
        buttons: [{
          text: 'OK'
        }]
      }).then(alert => alert.present());
     }

    }

    handleFirstNameValue(event) {
      this.firstName = event.target.value;
    }

    handleLastNameValue(event) {
      this.lastName = event.target.value;
    }
}
