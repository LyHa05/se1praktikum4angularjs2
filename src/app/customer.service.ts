import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]>{
    let customers$ = this.http
      .get(`${this.baseUrl}/customers`, {headers: this.getHeaders()})
      .map(mapCustomers)
      .catch(handleError);
    return customers$;
  }

  createCustomer(customer: Customer) : Observable<Response>{
    var dataObj = { name : customer.name, _csrf: undefined};
    let result$ = this.http
      .post(`${this.baseUrl}/customers`, dataObj)
      .catch(handleError);
    return result$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapCustomers(response:Response): Customer[]{
  return response.json().map(toCustomer)
}

function toCustomer(r:any): Customer{
  let customer = <Customer>({
    id: r.id,
    name: r.name,
  });
  return customer;
}

function mapCustomer(response:Response): Customer{
  return toCustomer(response.json());
}

function handleError (error: any) {
  return Observable.throw(error);
}

