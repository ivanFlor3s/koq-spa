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
  tallesNumero: string[];
  colorCode: string;

  constructor(private activatedRoute: ActivatedRoute, private ropaService: RopaService) {
    this.activatedRoute.params.subscribe(params => {
      console.log('el objeto' + params['id']);
      this.articulo = this.ropaService.getArticulo(params['id']);
      console.log(this.articulo);
      this.tallesNumero = this.articulo.talles;
      console.log(this.tallesNumero);

      this.misColores = this.articulo.colores;
      console.log(this.misColores);
    });
   }
  ngOnInit(): void {
  }
}
