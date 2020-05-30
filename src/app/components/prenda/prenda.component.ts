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
  colorDisplayed = 'rgb(255, 235, 205)' ;
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
    });
   }
  ngOnInit(): void {
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

