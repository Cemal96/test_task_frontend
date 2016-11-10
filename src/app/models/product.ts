import { Offer } from 'models/offer';
import { Store } from 'models/store';
export class Product {
  constructor(public id: number, public name: string, public description: string, public offers: Offer[], public stores: Store[]) { }
}
