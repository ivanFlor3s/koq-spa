import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorEnDos'
})
export class ColorEnDosPipe implements PipeTransform {

  transform(color: string): string {
    let palabras = color.split(' ');
    if (palabras.length > 1 ){
      return palabras[0].substr(0, 1) + palabras[1].substr(0, 1).toUpperCase();
    }
    else {
      return color.substr(0, 2).toUpperCase();
    }
  }

}
