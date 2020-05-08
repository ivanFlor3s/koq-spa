import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLocaleLowerCase();
    console.log(value);
    let nombres = value.split(' ');
    nombres = nombres.map(nombre => {
      return nombre[0].toUpperCase() + nombre.substr(1) ;
    });
    console.log(nombres);
    return nombres.join(' ');
  }

}
