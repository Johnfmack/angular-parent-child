import { Component, OnInit, Input } from '@angular/core';
import { ICustomer} from '../shared/interfaces';
import { SorterService} from '../../core/sorter.service'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] =[];
  @Input() get customers(): ICustomer[] {
      return this._customers;
  }

  set customers(value: ICustomer[]){
      if(value) {
        this.filteredCustomers = this._customers = value;
        this.calculateOrders();
      }
  }

//filteredCustomers: ICustomer[] = [];
filteredCustomers: any[] = [];
customersOrderTotal: number = 0;
currencyCode: string = 'USD';

  constructor(private sorterService: SorterService) { }
  // title: string = '';
  //  people: any[] = [];

  ngOnInit(): void {
  //  this.filteredCustomers = [
   
  //     {id: 1, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014,7,10)},
  //     {id: 2, name: 'jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017,2,22)},
  //     {id: 3, name: 'michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002,10,31)},
  //     {id: 4, name: 'jim thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2012,5,10)},
 
  //  ]
  }

  

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal!;
    });
  }

filter(data: string){
  if(data) {
    this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
      return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
             cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
             cust.orderTotal!.toString().indexOf(data) > -1;

    })
   
  } else {
    this.filteredCustomers = this.customers;
  }
  this.calculateOrders();
}


  sort(prop: string){
    this.sorterService.sort(this.filteredCustomers, prop);
  }

}
