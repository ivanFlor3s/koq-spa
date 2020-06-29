import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  displayMap: string;
  constructor() {
   }

  ngOnInit(): void {
    this.displayMap = 'local1';
  }
  setMap(lugar: string){
    if (lugar == 'Local 1' ){
      this.displayMap = 'local1';
        }
    else if (lugar == 'Local 2'){
      this.displayMap = 'local2';
    }
    else if (lugar == 'Local 3'){
      this.displayMap = 'local3';
    }
    console.log(this.displayMap);
  }
}
