import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    listaRopa: Ropa[] = [
        {
            nombre: 'BUZO CON CAPUCHA',
            talles: [1, 2, 3, 4, 6, 8],
            colores: ['Negro', 'Blanco', 'Rosa viejo', 'Rojo', 'Camel', 'Mostaza'],
            fotoPrincipal: 'assets/img/buzo-capucha.jpg'
        }
    ];

    constructor() {}
}
export interface Ropa{
    nombre: string;
    talles: number[];
    colores: string [];
    fotoPrincipal: string;
    otrasFotos?: string[];
}
