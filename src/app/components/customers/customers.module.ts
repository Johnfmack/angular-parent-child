import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component'
import { CustomersListComponent } from '../customers-list/customers-list.component'
import { FilterTextboxComponent } from '../filter-textbox/filter-textbox.component';
import { SharedModule } from '../../components/shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent,FilterTextboxComponent],
  imports: [
    CommonModule, SharedModule, FormsModule, CustomersRoutingModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
