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

  getProducts(id: number, min_price?: number, max_price?: number) {
    let params = new URLSearchParams();
    if (max_price) {
      params.set('min_price', String(min_price));
      params.set('max_price', String(max_price));
    }
    return this._http.get(API_URL + 'categories/'+ id + '/products.json', {search: params})
                      .toPromise()
                      .then(response => response.json())
                      .catch(this._errorService.handleError);
  }

  getProduct(id: number) {
    return this._http.get(API_URL + 'products/' + id + '.json')
               .toPromise()
               .then(response => response.json())
               .catch(this._errorService.handleError);
  }
}
