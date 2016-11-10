import { Pipe, PipeTransform } from '@angular/core';

import { Offer } from 'models/offer'


@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
  transform(value: Offer[], i: number): number {
    let range=[];
    let prices=[];
    let y = 0;
    for (let entry of value) {
      prices[y] = entry.price;
      y+=1;
    }
    range[0]= Math.min.apply(null, prices);
    range[1] = Math.max.apply(null, prices);
    return range[i];
  }
}
