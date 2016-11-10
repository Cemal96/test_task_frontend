import { Component, Input } from '@angular/core';

import { Store } from 'models/store';

@Component({
  selector: 'store',
  templateUrl: '../templates/store.component.html'
})
export class StoreComponent {
  @Input()
  store: Store;
}
