import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageDefault'
})
export class ImageDefaultPipe implements PipeTransform {

  transform(value: any, url: string): string {
    return 'defaultimage'
  }

}
