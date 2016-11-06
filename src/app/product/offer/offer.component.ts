import { Component, Input } from '@angular/core';

import { Offer } from './offer';

@Component({
  selector: 'offer',
  template: `
    <li *ngFor="let offer of offers">
      {{offer.price | currency}}
    </li>
  `,
  styleUrls: [
    '../../app.style.scss'
  ]
})
export class OfferComponent {
  @Input()
  offers: Offer[];
}
