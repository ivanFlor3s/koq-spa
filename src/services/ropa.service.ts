import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    listaRopa: Ropa[] = [
        {
            id: 0,
            nombre: 'BUZO CON CAPUCHA',
            talles: ['1', '2', '3', '4', '6', '8'],
            colores: ['Negro', 'Blanco', 'Rosa viejo', 'Rojo', 'Camel', 'Mostaza'],
            fotoPrincipal: 'assets/img/buzo-capucha.jpg',
            precio: 99,
        },
        {
            id: 1,
            nombre: 'CAMISA DE FRIBRANA',
            talles: ['0', '1', '2', '3', '4', '5', '6', '7', '9', '11'],
            colores: ['Negro', 'Blanco', 'Rojo', 'Celeste', 'Francia', 'Rosa', 'Coral', 'Terracota', 'Camel', 'Verde', 'Rayas B/N', 'Rayas N/B'],
            fotoPrincipal: 'assets/img/camisa-fibrana.jpg',
            precio: 180,
        },
        {
            id: 2,
            nombre: 'CAMISOLA DE FIBRANA',
            talles: ['1', '2', '3', '4', '6', '8', '10'],
            colores: ['Negro', 'Blanco', 'Rosa', 'Bordo', 'Francia', 'Verde', 'Mostaza', 'Navy', 'Coral'],
            fotoPrincipal: 'assets/img/camisola-de-fibrana.jpg',
            precio: 99,
        }
        //['CAMISA DE FRIBRANA', 'CAMISOLA DE FIBRANA', 'BASICA MANGA CORTA', 'BASICA MANGA LARGA', 'CHOMBA MODAL', 'POLERA MODAL', 'BUZO CON CAPUCHA', 'CAMPERA CON CAPUCHA', 'SWEATER PUPERO', 'SWEATER POLERA', 'SWEATER', 'SWEATER CUELLO BOTE', 'CALZA DE ALGODÓN', 'CALZA FRIZADA DE LYCRA']
        //[0, 1, 2, 3, 4, 5, 6, 7, 9, 11],[1, 2, 3, 4, 6, 8, 10],[0, 1, 2, 3, 4, 5, 6, 8, 10],[0, 1, 2, 3, 4, 6, 8, 10],[0, 1, 2, 3, 4, 6, 8, 10],[1, 2, 3, 4, 5, 6, 8],[1, 2, 3, 4, 6, 8],[1, 2, 3, 5, 6, 8, 10],[],[],[],[],[1, 2, 3, 4, 5, 6, 8],[1, 2, 3, 4, 5, 6, 8]
    ];

    constructor() {
        console.log('Running');
    }

    getRopas(){
        return this.listaRopa;
    }
    getArticulo(index: number){
        for (let articulo of this.listaRopa){
            if (articulo.id == index){
                return articulo;
            }
        }
    }
}
export interface Ropa{
    id: number;
    nombre: string;
    talles: string[];
    colores: string [];
    fotoPrincipal: string;
    otrasFotos?: string[];
    precio: number;
}


