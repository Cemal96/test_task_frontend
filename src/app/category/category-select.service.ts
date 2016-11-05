import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category';

@Injectable()
export class HeroService {

  private apiUrl = 'localhost:3001/';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Category[]> {
    return this.http.get(this.apiUrl + 'categories')
               .toPromise()
               .then(response => response.json().data as Category[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
