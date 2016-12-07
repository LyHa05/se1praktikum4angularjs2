import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { BuchungspositionService } from './buchungsposition.service';
import { BuchungsPosition } from './buchungsposition';

@Component({
  selector: 'app-root',
  providers: [CustomerService, BuchungspositionService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Willkommen bei Angular 2';
  errorMessage = '-';

  customers = [];
  buchungsPositionen = [];
  isLoading = true;

  newCustomer = new Customer(0, '');
  newBuchungsPosition = new BuchungsPosition(0, 0);

  constructor(private customerService: CustomerService,
              private buchungspositionService: BuchungspositionService) { }

  ngOnInit() {
    this.reloadCustomers();
    this.reloadBuchungsPositionen();
  }

  reloadCustomers() {
    this.customerService
      .getCustomers()
      .subscribe(
        /* happy path */ p => this.customers = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
  }

  onSubmit() {
    this.customerService.createCustomer(this.newCustomer)
      .subscribe(
        /* happy path */ () => { },
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => {
          this.newCustomer.name = '';
          this.reloadCustomers();
        });
  }

    reloadBuchungsPositionen() {
    this.buchungspositionService
      .getBuchungsPositionen()
      .subscribe(
        /* happy path */ p => this.buchungsPositionen = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
  }

    ueberweisen() {
    this.buchungspositionService.createBuchhungsPosition(this.newBuchungsPosition)
      .subscribe(
        /* happy path */ () => { },
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => {
          this.newBuchungsPosition.gebuchterBetrag = 0;
          this.reloadBuchungsPositionen();
        });
  }
}
