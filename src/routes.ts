import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { CatalogoComponent } from './app/components/catalogo/catalogo.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
