import { Component, OnInit } from '@angular/core';
import { ICustomer} from '../shared/interfaces';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string = '';
  people: ICustomer[] = [];
  insert = "king";
  isVisible = true;

  changeVisibility() {
    this.isVisible = !this.isVisible
  }

  onReceiveMessage(event: string){
    let message = event
    alert(message);
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);
    // this.people = [
    //   {id: 1, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014,7,10)},
    //   {id: 2, name: 'jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017,2,22)},
    //   {id: 3, name: 'michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002,10,31)},
    //   {id: 4, name: 'jim thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2012,5,10)},


    // ]

   
    
  }


}
