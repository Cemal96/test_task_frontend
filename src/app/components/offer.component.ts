import { Component, Input } from '@angular/core';

import { Offer } from '../models/offer';

@Component({
  selector: 'offer',
  templateUrl: '../templates/offer.component.html'
})
export class OfferComponent {
  @Input()
  offer: Offer;
}
