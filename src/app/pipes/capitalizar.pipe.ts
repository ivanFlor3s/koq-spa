import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string, todos: boolean): string {
    value = value.toLocaleLowerCase();
    console.log(value);
    let nombres = value.split(' ');
    if (todos){
      nombres = nombres.map(nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1) ;
      });
    }
    else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    console.log(nombres);
    return nombres.join(' ');
  }
}
