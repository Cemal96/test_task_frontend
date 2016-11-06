import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

import { Product } from './product';



@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private apiUrl = 'http://localhost:3001/';

  getProducts() {
    return this._http.get(this.apiUrl + 'categories/3/' + 'products')
      .map((response: Response) => <Product[]>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
