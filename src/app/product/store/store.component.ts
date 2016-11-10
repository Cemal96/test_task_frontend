import { Component, Input } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {
  @Input()
  stores: Store[];
}
