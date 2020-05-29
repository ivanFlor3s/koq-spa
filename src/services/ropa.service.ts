import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
     listaRopa: Ropa[] = [
        {
            id: 0,
            nombre: 'BUZO CON CAPUCHA',
            talles: [
                {
                    talle: '1',
                    precio: '420'
                },
                {
                    talle: '2',
                    precio: '420'
                },
                {
                    talle: '3',
                    precio: '480'
                },
                {
                    talle: '4',
                    precio: '480'
                },
                {
                    talle: '5',
                    precio: '480'
                },
                {
                    talle: '6',
                    precio: '550'
                },
                {
                    talle: '8',
                    precio: '550'
                }
            ],
            colores: ['Negro', 'Blanco', 'Rosa viejo', 'Rojo', 'Camel', 'Mostaza'],
            fotoPrincipal: 'assets/img/buzo-capucha/buzo-capucha.jpg',
            precio: 99,
            otrasFotos: ['assets/img/buzo-capucha/buzo-capucha2.jpg', 'assets/img/buzo-capucha/buzo-capucha1.jpg'],
            descripcion: `Buzo comodo para hacer ejercicio salidas casuales, uno nunca sabe donde puede ir. Sentite comoda y deportiva`
        },
        {
            id: 1,
            nombre: 'CAMISA DE FRIBRANA',
            talles: [
                {
                    talle: '0',
                    precio: '590'
                },
                {
                    talle: '1',
                    precio: '590'
                },
                {
                    talle: '2',
                    precio: '590'
                },
                {
                    talle: '3',
                    precio: '720'
                },
                {
                    talle: '4',
                    precio: '720'
                },
                {
                    talle: '5',
                    precio: '720'
                },
                {
                    talle: '6',
                    precio: '900'
                },
                {
                    talle: '7',
                    precio: '800'
                },
                {
                    talle: '9',
                    precio: '900'
                },
                {
                    talle: '11',
                    precio: '900'
                }
            ],
            colores: ['Negro', 'Blanco', 'Rojo', 'Celeste', 'Francia', 'Rosa', 'Coral', 'Terracota', 'Camel', 'Verde', 'Rayas B/N', 'Rayas N/B'],
            fotoPrincipal: 'assets/img/camisa-fibrana/camisa-fibrana.jpg',
            precio: 180,
            otrasFotos: [],
            descripcion: ''
        },
        
    ];

    constructor() {
        console.log('Running');
    }

    getRopas(){
        return this.listaRopa;
    }
    // Ojo con esa comparacion debe ser ==
    getArticulo(index: number){
        for (const articulo of this.listaRopa){
            // tslint:disable-next-line:triple-equals
            if (articulo.id == index){
                return articulo;
            }
        }
    }
}
export interface Ropa{
    id: number;
    nombre: string;
    talles: any[];
    colores: string [];
    fotoPrincipal: string;
    otrasFotos: string[];
    precio: number;
    descripcion: string;
}




