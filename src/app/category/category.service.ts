import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

import { Category } from './category';
import { ErrorService } from '../services/error.service'


@Injectable()
export class CategoryService {

  constructor(private _http: Http,
              private _errorService: ErrorService) { }

  getCategories() {
    return this._http.get(API_URL + 'categories.json')
      .map((response: Response) => <Category[]>response.json())
      .toPromise()
      .catch(this._errorService.handleError);
  }
}
