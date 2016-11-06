import { Component, Input } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'store',
  template: `
    <li *ngFor="let store of stores">
      {{store.name}}
    </li>
  `
})
export class StoreComponent {
  @Input()
  stores: Store[];
}
