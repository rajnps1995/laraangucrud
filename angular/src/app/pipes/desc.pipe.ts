import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(Array.isArray(value)){
      return value.sort((a,b) => 0 - (a > b ? 1 : -1));
      // console.log('desc');
    }

    return value;
  }

}
