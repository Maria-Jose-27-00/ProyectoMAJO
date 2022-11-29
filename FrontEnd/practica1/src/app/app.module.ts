import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRACTICA1Component } from './componentes/practica1/practica1.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EnfermedadesrenalesComponent } from './componentes/enfermedadesrenales/enfermedadesrenales.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    AppComponent,
    PRACTICA1Component,
    InicioComponent,
    EnfermedadesrenalesComponent,
    GraficasComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
