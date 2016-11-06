import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

import { Category } from './category';

const CATEGORIES: Category[] = [
  {id: 1, name: 'Notebook'},
  {id: 2, name: 'Ultrabook'},
  {id: 3, name: 'Desktop'}
];

@Injectable()
export class CategoryService {

  constructor(private _http: Http) { }

  private apiUrl = 'http://localhost:3001/';

  getVehicles() {
    return this._http.get(this.apiUrl + 'categories.json')
      .map((response: Response) => <Category[]>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
