import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

import { Product } from './product';
import { Products } from './products';
import { ErrorService } from '../services/error.service'



@Injectable()
export class ProductService {

  constructor(private _http: Http,
              private _errorService: ErrorService) { }

  private apiUrl = 'http://localhost:3001/';

  getProducts(id: number, min_price?: number, max_price?: number) {
    let params = new URLSearchParams();
    if (max_price) {
      params.set('min_price', String(min_price));
      params.set('max_price', String(max_price));
    }
    return this._http.get(this.apiUrl + 'categories/'+ id + '/products.json', {search: params})
                      .toPromise()
                      .then(response => response.json() as Products)
                      .catch(this._errorService.handleError);
  }

  getProduct(id: number) {
    return this._http.get(this.apiUrl + 'products/' + id + '.json')
               .toPromise()
               .then(response => response.json() as Product)
               .catch(this._errorService.handleError);
  }
}
