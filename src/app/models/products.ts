import { Product } from 'models/product';
export class Products {
  constructor(public productsList: Product[], public min_price: number, public max_price: number) { }
}
