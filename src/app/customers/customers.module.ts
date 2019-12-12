import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
