import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  // no lo vi
    constructor(private datosServ:DatosService) {}
  
  
  view : [number,number] = [700, 300];
  multi = []

  
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Año';
  yAxisLabel: string = 'Enfermos';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#31D6CA', '#ABFAB1']
  };
  onSelect(event:any) {
    console.log(event);
  }

  ngOnInit(): void {
    let form={
      "tipo":"obtenerDatos"
    }
    this.datosServ.obtenerDatos(form).subscribe((respuesta:any)=>{
      console.log(respuesta.datos);
      this.multi = respuesta.datos
    });
  }

}
