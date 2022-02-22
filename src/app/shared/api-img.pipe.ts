import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiImg'
})
export class ApiImgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
