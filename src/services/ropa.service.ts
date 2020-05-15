import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
     listaRopa: Ropa[] = [
        {
            id: 0,
            nombre: 'BUZO CON CAPUCHA',
            talles: ['1', '2', '3', '4', '6', '8'],
            colores: ['Negro', 'Blanco', 'Rosa viejo', 'Rojo', 'Camel', 'Mostaza'],
            fotoPrincipal: 'assets/img/buzo-capucha/buzo-capucha.jpg',
            precio: 99,
        },
        {
            id: 1,
            nombre: 'CAMISA DE FRIBRANA',
            talles: ['0', '1', '2', '3', '4', '5', '6', '7', '9', '11'],
            colores: ['Negro', 'Blanco', 'Rojo', 'Celeste', 'Francia', 'Rosa', 'Coral', 'Terracota', 'Camel', 'Verde', 'Rayas B/N', 'Rayas N/B'],
            fotoPrincipal: 'assets/img/camisa-fibrana/camisa-fibrana.jpg',
            precio: 180,
        },
        {
            id: 2,
            nombre: 'CAMISOLA DE FIBRANA',
            talles: ['1', '2', '3', '4', '6', '8', '10'],
            colores: ['Negro', 'Blanco', 'Rosa', 'Bordo', 'Francia', 'Verde', 'Mostaza', 'Navy', 'Coral'],
            fotoPrincipal: 'assets/img/camisola-fibrana/camisola-fibrana.jpg',
            precio: 99,
        },
		
        //['CAMISA DE FRIBRANA', 'CAMISOLA DE FIBRAN	A', 'BASICA MANGA CORTA', 'BASICA MANGA LARGA', 'CHOMBA MODAL', 'POLERA MODAL', 'BUZO CON CAPUCHA', 'CAMPERA CON CAPUCHA', 'SWEATER PUPERO', 'SWEATER POLERA', 'SWEATER', 'SWEATER CUELLO BOTE', 'CALZA DE ALGODÓN', 'CALZA FRIZADA DE LYCRA']
        //[0, 1, 2, 3, 4, 5, 6, 7, 9, 11],[1, 2, 3, 4, 6, 8, 10],[0, 1, 2, 3, 4, 5, 6, 8, 10],[0, 1, 2, 3, 4, 6, 8, 10],[0, 1, 2, 3, 4, 6, 8, 10],[1, 2, 3, 4, 5, 6, 8],[1, 2, 3, 4, 6, 8],[1, 2, 3, 5, 6, 8, 10],[],[],[],[],[1, 2, 3, 4, 5, 6, 8],[1, 2, 3, 4, 5, 6, 8]
		
		{
            id: 3,
            nombre: 'BASICA MANGA CORTA',
            talles: ['0','1', '2', '3', '4', '6', '8', '10'],
            colores: [],
            fotoPrincipal: 'assets/img/basica-manga-corta/basica-manga-corta.jpg',
            precio: 340,
        },
			{
            id: 4,
            nombre: 'BASICA MANGA LARGA',
            talles: ['0','1', '2', '3', '4', '6', '8', '10'],
            colores: [],
            fotoPrincipal: 'assets/img/basica-manga-larga/basica-manga-larga.jpg',
            precio: 420,
        },
		{
            id: 5,
            nombre: 'CHOMBA MODAL',
            talles: ['0','1', '2', '3', '4', '6', '8', '10'],
            colores: [],
            fotoPrincipal: 'assets/img/chomba-modal/chomba-modal.jpg',
            precio: 460,
        },
		{
            id: 6,
            nombre: 'POLERA MODAL',
            talles: ['1', '2', '3', '4','5', '6', '8'],
            colores: [],
            fotoPrincipal: 'assets/img/polera-modal/polera-modal.jpg',
            precio: 420,
        },
		{
            id: 7,
            nombre: 'CAMPERA CON CAPUCHA',
            talles: ['1', '2', '3', '5', '6', '8', '10'],
            colores: [],
            fotoPrincipal: 'assets/img/campera-capucha/campera-capucha.jpg',
            precio: 530,
        },
		{
            id: 8,
            nombre: 'SWEATER PUPERO',
            talles: ['Unico'],
            colores: [],
            fotoPrincipal: 'assets/img/sweater-pupero/sweater-pupero.jpg',
            precio: 490,
        },
		{
            id: 8,
            nombre: 'SWEATER POLERA',
            talles: ['Unico'],
            colores: [],
            fotoPrincipal: 'assets/img/sweater-polera/sweater-polera.jpg',
            precio: 550,
        },
		{
            id: 9,
            nombre: 'SWEATER',
            talles: ['Unico'],
            colores: [],
            fotoPrincipal: 'assets/img/sweater/sweater.jpg',
            precio: 500,
        },
		{
            id: 10,
            nombre: 'SWEATER CUELLO BOTE',
            talles: ['Unico'],
            colores: [],
            fotoPrincipal: 'assets/img/sweater-cuello-bote/sweater-cuello-bote.jpg',
            precio: 500,
        },
		{
            id: 11,
            nombre: 'CALZA DE ALGODÓN',
            talles: ['1', '2', '3', '4', '5', '6', '8'],
            colores: [],
            fotoPrincipal: 'assets/img/calza-algodon/calza-algodon.jpg',
            precio: 660,
        },
		{
            id: 12,
            nombre: 'CALZA FRIZADA DE LYCRA',
            talles: ['1', '2', '3', '4', '5', '6', '8'],
            colores: [],
            fotoPrincipal: 'assets/img/calza-lycra/calza-lycra.jpg',
            precio: 660,
        },
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


