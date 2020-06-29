import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../../services/ropa.service';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  stock: any[] = [];
  loading: boolean;
  constructor(private ropaService: RopaService ) {
    this.loading = true;
    console.log(this.ropaService.getRopas());
    this.stock = this.ropaService.getRopas();

    this.loading = false;
  }
  ngOnInit(): void {
  }

}
