import { Offer } from './offer/offer';
import { Store } from './store/store';
export class Product {
  constructor(public id: number, public name: string, public description: string, public offers: Offer[], public stores: Store[]) { }
}
