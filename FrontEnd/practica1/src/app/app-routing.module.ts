import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRACTICA1Component } from './componentes/practica1/practica1.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {GraficasComponent} from './componentes/graficas/graficas.component';
import {EnfermedadesrenalesComponent} from './componentes/enfermedadesrenales/enfermedadesrenales.component';


const routes: Routes = [
  {path: 'PRACTICA1', component: PRACTICA1Component},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Enfermedadesrenales', component: EnfermedadesrenalesComponent},
  {path: 'Graficas', component: GraficasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
