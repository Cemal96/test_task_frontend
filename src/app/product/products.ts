import { Product } from './product';
export class Products {
  constructor(public products: Product[], public min_price: number, public max_price: number) { }
}
