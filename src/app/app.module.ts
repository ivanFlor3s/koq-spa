import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from '../routes';

// Servicios
import { RopaService } from '../services/ropa.service';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { TarjetaRopaComponent } from './components/tarjeta-ropa/tarjeta-ropa.component';
import { PrendaComponent } from './components/prenda/prenda.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DotColorPipe } from './pipes/dot-color.pipe';
import { ColorEnDosPipe } from './pipes/color-en-dos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    ContactoComponent,
    UbicacionComponent,
    TarjetaRopaComponent,
    PrendaComponent,
    CapitalizarPipe,
    DotColorPipe,
    ColorEnDosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RopaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
