import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];
  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.title = "Customers";
    this.isVisible = true;
    this.people = [
      { id: 1, name: 'Ion Egizu', city: 'Elizondo', orderTotal: 9.99, customersSince: new Date(2014,7,10) },
      { id: 2, name: 'Ane Doe', city: 'Pamplona/Iruña', orderTotal: 19.99, customersSince: new Date(2017,12,12) },
      { id: 3, name: 'Juan sin Tierra', city: 'Tudela', orderTotal: 99.99, customersSince: new Date(2000,9,12) },
      { id: 4, name: 'Julia Thomas', city: 'Tafalla', orderTotal: 599.99, customersSince: new Date(1212,12,12) }
    ];
  }

  changeVisibility() {
    if (this.isVisible == true){
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
     
  }

}