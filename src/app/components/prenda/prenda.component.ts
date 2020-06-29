import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopaService } from '../../../services/ropa.service';

@Component({
  selector: 'app-prenda',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})
export class PrendaComponent implements OnInit {
  misColores: any;
  articulo: any;
  tallesNumero: any[];
  colorCode: string;
  colorDisplayed = 'rgb(0, 138, 184)' ;
  colorTextDisplayed = 'Seleccionar color...';
  precioDisplayed = '0';
  selectedTalle: number;

  constructor(private activatedRoute: ActivatedRoute, private ropaService: RopaService) {
    this.activatedRoute.params.subscribe(params => {
      this.articulo = this.ropaService.getArticulo(params['id']);
      console.log(this.articulo);
      this.tallesNumero = this.articulo.talles;
      console.log(this.tallesNumero);

      this.misColores = this.articulo.colores;

      this.selectedTalle = this.tallesNumero[0].talle;
    });
   }
  ngOnInit(): void {
    this.selectedTalle = this.tallesNumero[0].talle;
    console.log('el talle es:' + this.selectedTalle);
  }

  getColor(color: string){
    switch (color){
      case 'Negro':
        return 'black';
      case 'Blanco':
        return 'white';
      case 'Rosa viejo':
        return 'rgb(212,110,112)';
      case 'Rojo':
        return 'red';
      case 'Coral':
        return 'rgb(248, 131, 121)';
      case 'Terracota':
        return 'rgb(194, 70, 22)';
      case 'Camel':
        return 'rgb(193, 154, 107)';
      case 'Verde':
        return 'green';
      case 'Mostaza':
        return 'rgb(235, 189, 48)';
      case 'Celeste':
        return '#00aae4';
      case 'Francia':
        return 'rgb(21, 3, 186)';
      case 'Rosa':
        return '#ffabce';
      case 'Fucsia':
        return '#FF00FF';
      case 'Amarillo':
        return 'rgb(255,255,0)';
      case 'Naranja':
        return '#ff8000';
      case 'Azul marino':
        return '#060a93';
      case 'Bordo':
        return '#6e1217';
      case 'Gris':
        return '#9b9b9b';
      default: return 'black';
    }
  }
  displayColor(color: string){
    this.colorDisplayed = this.getColor(color);
    this.colorTextDisplayed = color;
  }
  displayPrecio(talleObj: any){
    this.precioDisplayed = talleObj.precio;
  }
  selectIt(numTalle: number){
    this.selectedTalle = numTalle;
  }
  isSelected(numTalle: number){
    return this.selectedTalle == numTalle;
  }
}

