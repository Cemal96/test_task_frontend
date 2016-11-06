import { Component, Input } from '@angular/core';

import { Offer } from './offer';

@Component({
  selector: 'offer',
  template: `
    <li *ngFor="let offer of offers">
      {{offer.price}}
    </li>
  `
})
export class OfferComponent {
  @Input()
  offers: Offer[];
}
