import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';


const routes: Routes = [
 
  // { path: 'orders/:id', pathMatch: 'full', redirectTo: '/orders' },
  // { path: '', pathMatch: 'full', redirectTo: '/customers'},
  // { path: '**', pathMatch: 'full', redirectTo: '/customers'}
  { path: 'orders/:id', component: OrdersComponent },
  { path: '', component: CustomersComponent },
  { path: '**', component: CustomersComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
