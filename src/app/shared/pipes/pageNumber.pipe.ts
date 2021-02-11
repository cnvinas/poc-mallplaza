import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageNumber',
  pure: false
})
export class PageNumber implements PipeTransform {
  transform(value): any {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}