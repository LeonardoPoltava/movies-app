import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  public transform(value: string): string {
    return `https://image.tmdb.org/t/p/w220_and_h330_face/${value}`;
  }

}
