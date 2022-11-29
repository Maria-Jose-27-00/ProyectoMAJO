import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
 private URL = 'http://localhost:8000';

  constructor(private datosHttp: HttpClient) { }

  obtenerDatos(datos:any):Observable<any> {
    console.log(datos);
    return this.datosHttp.post(`http://localhost:8000/apier/companies/`,datos);
  }
}
