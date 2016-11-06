import { Injectable }    from '@angular/core';

import { Category } from './category';

const CATEGORIES: Category[] = [
  {id: 1, name: 'Notebook'},
  {id: 2, name: 'Ultrabook'},
  {id: 3, name: 'Desktop'}
];
@Injectable()
export class CategoryService {
  getCategories(): Category[] {
    return CATEGORIES;
  }
}
