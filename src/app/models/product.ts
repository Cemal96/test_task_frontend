import { Offer } from './offer';
import { Store } from './store';
export class Product {
  constructor(public id: number, public name: string, public description: string, public offers: Offer[], public stores: Store[]) { }
}
