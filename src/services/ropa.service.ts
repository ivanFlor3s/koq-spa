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
            otrasFotos: ['assets/img/buzo-capucha/buzo-capucha2.jpg',
            'assets/img/buzo-capucha/buzo-capucha1.jpg'],
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
            fotoPrincipal: 'assets/img/camisa-fibrana/camisa-fibrana5.jpg',
            otrasFotos: [
                'assets/img/camisa-fibrana/camisa-fibrana.jpg',
                'assets/img/camisa-fibrana/camisa-fibrana1.jpg',
                'assets/img/camisa-fibrana/camisa-fibrana2.jpg',
                'assets/img/camisa-fibrana/camisa-fibrana3.jpg',
            ],
            descripcion: 'Camisa suelta, comoda para salidas al aire libre, en el bar ....'
        },
        {
            id: 2,
            nombre: 'SWEATER JUVENIL',
            talles: [
                {
                    talle: 'Mediano',
                    precio: '300'
                }
            ],
            colores: ['Negro', 'Blanco', 'Gris', 'Amarillo', 'Camel', 'Naranja', 'Mostaza', 'Verde'],
            fotoPrincipal: 'assets/img/sweater-juvenil/sweater-juvenil9.jpg',
            otrasFotos: ['assets/img/sweater-juvenil/sweater-juvenil9.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil1.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil2.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil3.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil4.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil5.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil6.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil7.jpg',
            'assets/img/sweater-juvenil/sweater-juvenil8.jpg',
        ],
            descripcion: ''
        },
        {
            id: 3,
            nombre: 'SWEATER CUELLO BOTE',
            talles: [
                {
                    talle: 'Unico',
                    precio: '490'
                }
            ],
            colores: ['Negro', 'Blanco', 'Gris'],
            fotoPrincipal: 'assets/img/sweater-cuello-bote/sweater-cuello-bote.jpg',
            otrasFotos: ['assets/img/sweater-cuello-bote/sweater-cuello-bote2.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote3.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote4.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote5.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote6.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote7.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote8.jpg',
            'assets/img/sweater-cuello-bote/sweater-cuello-bote9.jpg',
        ],
            descripcion: ''
        },
        {
            id: 4,
            nombre: 'CAMPERA MODAL BLUSHER',
            talles: [
                {
                    talle: '1',
                    precio: '470'
                },
                {
                    talle: '2',
                    precio: '470'
                },
                {
                    talle: '3',
                    precio: '530'
                },
                {
                    talle: '5',
                    precio: '470'
                },
                {
                    talle: '6',
                    precio: '530'
                },
                {
                    talle: '8',
                    precio: '590'
                },
                {
                    talle: '10',
                    precio: '590'
                },
            ],
            colores: ['Negro', 'Blanco', 'Rosa viejo', 'Rojo', 'Mostaza'],
            fotoPrincipal: 'assets/img/campera-modal-plusher/campera-modal-plusher3.jpg',
            otrasFotos: ['assets/img/campera-modal-plusher/campera-modal-plusher2.jpg',
            'assets/img/campera-modal-plusher/campera-modal-plusher5.jpg',
            'assets/img/campera-modal-plusher/campera-modal-plusher4.jpg',
            'assets/img/campera-modal-plusher/campera-modal-plusher.jpg',
            'assets/img/campera-modal-plusher/campera-modal-plusher6.jpg',
            'assets/img/campera-modal-plusher/campera-modal-plusher7.jpg'
        ],
            descripcion: ''
        },
        {
            id: 5,
            nombre: 'CAMISA RAYON TWILL',
            talles: [
                {
                    talle: '0',
                    precio: '620'
                },
                {
                    talle: '1',
                    precio: '620'
                },
                {
                    talle: '2',
                    precio: '620'
                },
                {
                    talle: '3',
                    precio: '750'
                },
                {
                    talle: '4',
                    precio: '750'
                },
                {
                    talle: '5',
                    precio: '750'
                },
                {
                    talle: '6',
                    precio: '830'
                },
                {
                    talle: '7',
                    precio: '830'
                },
                {
                    talle: '9',
                    precio: '900'
                },
                {
                    talle: '11',
                    precio: '900'
                },
            ],
            colores: ['Negro', 'Blanco', 'Verde', 'Azul marino','Rosa viejo', 'Rojo', 'Mostaza', 'Terracota', 'Camel'],
            fotoPrincipal: 'assets/img/camisa-rayon-twill/camisa-rayon-twill8.jpg',
            otrasFotos: [
            'assets/img/camisa-rayon-twill/camisa-rayon-twill.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill1.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill4.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill5.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill6.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill3.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill9.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill10.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill11.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill12.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill13.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill14.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill15.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill16.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill17.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill18.jpg',
            'assets/img/camisa-rayon-twill/camisa-rayon-twill19.jpg',
        ],
            descripcion: ''
        },
        {
            id: 6,
            nombre: 'MANGA LARGA MODAL',
            talles: [
                {
                    talle: '0',
                    precio: '370'
                },
                {
                    talle: '1',
                    precio: '370'
                },
                {
                    talle: '2',
                    precio: '370'
                },
                {
                    talle: '3',
                    precio: '420'
                },
                {
                    talle: '4',
                    precio: '420'
                },
                {
                    talle: '5',
                    precio: '420'
                },
                {
                    talle: '6',
                    precio: '490'
                },
                {
                    talle: '8',
                    precio: '490'
                },
                {
                    talle: '10',
                    precio: '490'
                },
            ],
            colores: ['Negro', 'Blanco', 'Bordo', 'Gris', 'Francia', 'Rosa viejo', 'Rojo', 'Mostaza'],
            fotoPrincipal: 'assets/img/manga-larga-modal/manga-larga-modal.jpg',
            otrasFotos: [
            'assets/img/manga-larga-modal/manga-larga-modal2.jpg',
            'assets/img/manga-larga-modal/manga-larga-modal3.jpg',
            'assets/img/manga-larga-modal/manga-larga-modal4.jpg',
            'assets/img/manga-larga-modal/manga-larga-modal5.jpg',
            'assets/img/manga-larga-modal/manga-larga-modal6.jpg',
        ],
            descripcion: ''
        },
        {
            id: 7,
            nombre: 'CAMISOLA DE FIBRANA',
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
                    precio: '800'
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
                },
            ],
            colores: ['Negro', 'Blanco', 'Rosa', 'Mostaza', 'Bordo', 'Francia', 'Verde', 'Coral'],
            fotoPrincipal: 'assets/img/camisola-fibrana/camisola-fibrana.jpg',
            otrasFotos: [
            'assets/img/camisola-fibrana/camisola-fibrana1.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana2.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana3.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana4.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana5.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana6.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana7.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana8.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana9.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana10.jpg',
            'assets/img/camisola-fibrana/camisola-fibrana11.jpg',
        ],
            descripcion: ''
        },
        {
            id: 8,
            nombre: 'BASICA MODAL MANGA CORTA',
            talles: [
                {
                    talle: '0',
                    precio: '320'
                },
                {
                    talle: '1',
                    precio: '320'
                },
                {
                    talle: '2',
                    precio: '320'
                },
                {
                    talle: '3',
                    precio: '340'
                },
                {
                    talle: '4',
                    precio: '340'
                },
                {
                    talle: '5',
                    precio: '450'
                },
                {
                    talle: '6',
                    precio: '450'
                },
                {
                    talle: '8',
                    precio: '450'
                },
                {
                    talle: '10',
                    precio: '450'
                },
            ],
            colores: ['Negro', 'Blanco', 'Rosa', 'Melange', 'Rojo'],
            fotoPrincipal: 'assets/img/manga-corta/basica-manga-corta.jpg',
            otrasFotos: [
            'assets/img/manga-corta/basica-manga-corta1.jpg',
            'assets/img/manga-corta/basica-manga-corta3.jpg'
        ],
            descripcion: ''
        },
        {
            id: 9,
            nombre: 'CHOMBA MODAL',
            talles: [
                {
                    talle: '0',
                    precio: '420'
                },
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
                    precio: '460'
                },
                {
                    talle: '4',
                    precio: '460'
                },
                {
                    talle: '5',
                    precio: '460'
                },
                {
                    talle: '6',
                    precio: '520'
                },
                {
                    talle: '8',
                    precio: '520'
                },
                {
                    talle: '10',
                    precio: '520'
                },
            ],
            colores: ['Negro', 'Blanco', 'Rosa viejo', 'Gris', 'Melange', 'Mostaza', 'Camel', 'Rosa'],
            fotoPrincipal: 'assets/img/chomba-modal/chomba-modal.jpg',
            otrasFotos: [
                'assets/img/chomba-modal/chomba-modal2.jpg',
                'assets/img/chomba-modal/chomba-modal3.jpg',
                'assets/img/chomba-modal/chomba-modal4.jpg',
                'assets/img/chomba-modal/chomba-modal5.jpg',
                'assets/img/chomba-modal/chomba-modal6.jpg',
        ],
            descripcion: ''
        },
        {
            id: 10,
            nombre: 'TIRITAS MODAL',
            talles: [
                {
                    talle: '0',
                    precio: '170'
                },
                {
                    talle: '1',
                    precio: '170'
                },
                {
                    talle: '2',
                    precio: '170'
                },
                {
                    talle: '3',
                    precio: '230'
                },
                {
                    talle: '4',
                    precio: '230'
                },
                {
                    talle: '5',
                    precio: '230'
                },
                {
                    talle: '6',
                    precio: '300'
                },
                {
                    talle: '8',
                    precio: '300'
                },
                {
                    talle: '10',
                    precio: '300'
                },
            ],
            colores: ['Negro', 'Blanco', 'Rojo', 'Gris', 'Melange', 'Coral', 'Camel', 'Rosa'],
            fotoPrincipal: 'assets/img/tirita-modal-basica/tirita-modal-basica.jpg',
            otrasFotos: [],

            descripcion: ''
        },
        {
            id: 11,
            nombre: 'POLERA MODAL',
            talles: [
                {
                    talle: '1',
                    precio: '290'
                },
                {
                    talle: '2',
                    precio: '290'
                },
                {
                    talle: '3',
                    precio: '340'
                },
                {
                    talle: '4',
                    precio: '340'
                },
                {
                    talle: '5',
                    precio: '340'
                },
                {
                    talle: '6',
                    precio: '390'
                },
                {
                    talle: '8',
                    precio: '390'
                },
            ],
            colores: ['Negro', 'Blanco'],
            fotoPrincipal: 'assets/img/polera-modal/polera-modal.jpg',
            otrasFotos: [
        ],
            descripcion: ''
        },
        {
            id: 13,
            nombre: 'SWEATER POLERA',
            talles: [
                {
                    talle: 'Grande',
                    precio: '550'
                }
            ],
            colores: ['Negro', 'Rosa viejo', 'Blanco', 'Camel'],
            fotoPrincipal: 'assets/img/sweater-polera/sweater-polera.jpg',
            otrasFotos: [
                    ],
            descripcion: ''
        },
        {
            id: 14,
            nombre: 'SWEATER LANILLA CASHMERE CUELLO V',
            talles: [
                {
                    talle: '1',
                    precio: '620'
                },
                {
                    talle: '3',
                    precio: '620'
                },
                {
                    talle: '5',
                    precio: '720'
                },
                {
                    talle: '7',
                    precio: '720'
                },
                {
                    talle: '9',
                    precio: '820'
                },
                {
                    talle: '11',
                    precio: '820'
                },
            ],
            colores: ['Negro', 'Rosa bebe', 'Rosa viejo', 'Gris melange', 'Camel', 'Terracota'],
            fotoPrincipal: 'assets/img/cuello-v/lanilla-cuello-v1.jpg',
            otrasFotos: [
                'assets/img/cuello-v/lanilla-cuello-v2.jpg',
                'assets/img/cuello-v/lanilla-cuello-v3.jpg',
                'assets/img/cuello-v/lanilla-cuello-v5.jpg',
                'assets/img/cuello-v/lanilla-cuello-v6.jpg',
                'assets/img/cuello-v/lanilla-cuello-v7.jpg',
        ],
            descripcion: ''
        },
        {
            id: 15,
            nombre: 'CAMISETA TERMICA',
            talles: [
                {
                    talle: '2',
                    precio: '360'
                },
                {
                    talle: '3',
                    precio: '410'
                },
                {
                    talle: '4',
                    precio: '410'
                },
            ],
            colores: ['Negro', 'Blanco'],
            fotoPrincipal: 'assets/img/camiseta-termica/camiseta-termica.jpg',
            otrasFotos: [],
            descripcion: ''
        },
        {
            id: 17,
            nombre: 'CALZA DE ALGODÓN',
            talles: [
                {
                    talle: '1',
                    precio: '350'
                },
                {
                    talle: '2',
                    precio: '350'
                },
                {
                    talle: '3',
                    precio: '400'
                },
                {
                    talle: '4',
                    precio: '400'
                },
                {
                    talle: '5',
                    precio: '460'
                },
                {
                    talle: '6',
                    precio: '460'
                },
                {
                    talle: '8',
                    precio: '460'
                },
            ],
            colores: ['Negro', 'Gris'],
            fotoPrincipal: 'assets/img/calza-algodon/calza-algodon1.jpg',
            otrasFotos: [
                'assets/img/calza-algodon/calza-algodon.jpg',
                'assets/img/calza-algodon/calza.jpg'
        ],
            descripcion: ''
        },

    ];

    constructor() {
        console.log('Corriendo el forest gump');
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
    descripcion: string;
}




