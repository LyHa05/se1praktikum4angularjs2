import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  providers: [CustomerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Willkommen bei Angular 2';
  errorMessage = '-';

  customers = [];
  isLoading = true;

  newCustomer = new Customer(0,'');

  constructor(private customerService: CustomerService) { }

  ngOnInit(){
    this.reloadCustomers();
  }

  reloadCustomers(){
    this.customerService
      .getCustomers()
      .subscribe(
        /* happy path */ p => this.customers = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
  }

  onSubmit(){
    this.customerService.createCustomer(this.newCustomer)
      .subscribe(
        /* happy path */ () => { },
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => {
          this.newCustomer.name = '';
          this.reloadCustomers();
        });
  }
}
