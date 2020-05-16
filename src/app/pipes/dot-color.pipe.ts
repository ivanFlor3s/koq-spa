import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotColor'
})
export class DotColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
