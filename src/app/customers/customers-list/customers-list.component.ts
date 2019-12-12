import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})

export class CustomerListComponent implements OnInit {

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = "USD";

  constructor() { }

  ngOnInit() {
    this.filteredCustomers = [
        { id: 1, name: 'Ion Egizu', city: 'Elizondo', orderTotal: 9.99, customersSince: new Date(2014,7,10) },
        { id: 2, name: 'Ane Doe', city: 'Pamplona/Iruña', orderTotal: 19.99, customersSince: new Date(2017,12,12) },
        { id: 3, name: 'Juan sin Tierra', city: 'Tudela', orderTotal: 99.99, customersSince: new Date(2000,9,12) },
        { id: 4, name: 'Julia Thomas', city: 'Tafalla', orderTotal: 599.99, customersSince: new Date(1212,12,12) }
    ]
  }

  calculateOrders(){
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((element:ICustomer) => {
      this.customersOrderTotal += element.orderTotal;
    });
  }

}