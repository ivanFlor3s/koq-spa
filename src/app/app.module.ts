import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutas
import { AppRoutingModule } from '../routes';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
