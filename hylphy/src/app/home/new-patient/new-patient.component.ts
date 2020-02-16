import { NewPatientObj } from './../../variableObj/new-patient-obj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  constructor() { }
  newUser: NewPatientObj = {};
  ngOnInit() {
    console.log("ppp>", this.newUser.operationType)
  }
  Submit() {
    console.log('workin', this.newUser.lastName);
  }

}
