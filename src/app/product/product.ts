import { Offer } from './offer/offer';

export class Product {
  constructor(public id: number, public name: string, public offers: Offer[]) { }
}
