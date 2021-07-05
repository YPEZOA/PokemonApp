import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interface';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(arr: any[], page: number = 0, page_size: number = 0): Pokemon[] {
    if (!arr.length) return []
    page_size = page || 20
    page = page || 1
    --page

    return arr.slice(page * page_size, (page + 1) * page_size)

  }

}
