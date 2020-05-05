import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { CatalogoComponent } from './app/components/catalogo/catalogo.component';
import { ContactoComponent } from './app/components/contacto/contacto.component';
import { UbicacionComponent } from './app/components/ubicacion/ubicacion.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'donde-estamos', component: UbicacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
