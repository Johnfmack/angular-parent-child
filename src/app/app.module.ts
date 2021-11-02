import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './components/customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
//import { OrdersComponent } from './components/orders/orders.component'
import { OrdersModule } from './components/orders/orders.module';
//import { CustomersComponent } from './components/customers/customers.component';
//import { CustomersListComponent } from './components/customers-list/customers-list.component';
//import { FilterTextboxComponent } from './components/filter-textbox/filter-textbox.component';

@NgModule({
  declarations: [
    AppComponent,
  //  OrdersComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule, 
    SharedModule,
    CoreModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
