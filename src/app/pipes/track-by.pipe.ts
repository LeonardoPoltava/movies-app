import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'trackBy'
})
export class TrackByPipe<R extends Record<string, unknown>> implements PipeTransform {
  transform(prop: string | null):  (index: number, record: R) => unknown {
    if(!prop) {
      return (index: number, _: R) => index;
    }

    return (_: number, record: R) => {
      if(!record) {
        console.warn("Record is empty in trackBy pipe")
      }

      return record && record[prop];
    }
  }

}
