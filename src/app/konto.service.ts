import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Konto } from './konto';

@Injectable()
export class KontoService {
  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: Http) { }

  getKontos(): Observable<Konto[]> {
    let konten$ = this.http
      .get(`${this.baseUrl}/konten`, {headers: this.getHeaders()})
      .map(mapKonten)
      .catch(handleError);
    return konten$;
  }

createCustomer(konto: Konto) : Observable<Response> {
    var dataObj = { id : konto.id, _csrf: undefined};
    let result$ = this.http
      .post(`${this.baseUrl}/konten`, dataObj)
      .catch(handleError);
    return result$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapKonten(response: Response): Konto[] {
  return response.json().map(toKonto);
}

function toKonto(r: any): Konto {
  let konto = <Konto>({
    id: r.id,
    kontoNummer: r.kontoNummer,
  });
  return konto;
}

function mapKonto(response: Response): Konto {
  return toKonto(response.json());
}

function handleError (error: any) {
  return Observable.throw(error);
}


