import { Component, Input } from '@angular/core';

import { Offer } from './offer';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent {
  @Input()
  offer: Offer;
}
