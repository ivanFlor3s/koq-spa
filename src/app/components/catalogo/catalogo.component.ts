import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../../services/ropa.service';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  stock: any[] = [];
  constructor(private ropaService: RopaService ) {
    console.log(this.ropaService.getRopas());
    this.stock = this.ropaService.getRopas();
  }
  ngOnInit(): void {
  }

}
