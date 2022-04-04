import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asc'
})
export class AscPipe implements PipeTransform {


  transform(value: any, ...args: any[]): any {
    return value.sort();
  }

}
