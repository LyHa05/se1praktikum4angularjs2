import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BuchungsPosition } from './buchungsposition';

@Injectable()
export class BuchungspositionService {
  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: Http) { }

  getBuchungsPositionen(): Observable<BuchungsPosition[]> {
    let buchungspositionen$ = this.http
      .get(`${this.baseUrl}/buchungspositionen`, {headers: this.getHeaders()})
      .map(mapBuchungsPositionen)
      .catch(handleError);
    return buchungspositionen$;
  }

  createBuchhungsPosition(buchungsPosition: BuchungsPosition) : Observable<Response>{
    var dataObj = { name : buchungsPosition.id, _csrf: undefined};
    let result$ = this.http
      .post(`${this.baseUrl}/buchungspositionen`, dataObj)
      .catch(handleError);
    return result$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapBuchungsPositionen(response: Response): BuchungsPosition[] {
  return response.json().map(toBuchungsPosition);
}

function toBuchungsPosition(r: any): BuchungsPosition {
  let buchchungsPosition = <BuchungsPosition>({
    id: r.id,
    gebuchterBetrag: r.gebuchterBetrag,
  });
  return buchchungsPosition;
}

function mapBuchungsPosition(response: Response): BuchungsPosition {
  return toBuchungsPosition(response.json());
}

function handleError (error: any) {
  return Observable.throw(error);
}
