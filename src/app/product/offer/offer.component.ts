import { Component, Input } from '@angular/core';

import { Offer } from './offer';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: [
    '../../app.style.scss'
  ]
})
export class OfferComponent {
  @Input()
  offers: Offer[];
}
