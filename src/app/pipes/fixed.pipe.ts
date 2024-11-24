import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed'
})
export class FixedPipe implements PipeTransform {

  transform(value: number, decimals: number = 1): number {
    if (isNaN(value)) {
      return 0;
    }
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }

}
