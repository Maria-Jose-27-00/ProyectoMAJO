import { Component, OnInit } from '@angular/core';
import { PRACTICA1Service } from 'src/app/auth/practica1.service';

@Component({
  selector: 'app-practica1',
  templateUrl: './practica1.component.html',
  styleUrls: ['./practica1.component.css']
})
export class PRACTICA1Component implements OnInit {

  user={
    nombre :"",
    pass : ""
  }

  constructor(private Acceso: PRACTICA1Service) { }

  ngOnInit(): void {
  }
  validar(){
    if(this.user.nombre !="" && this.user.pass !="" ){

        console.log(this.Acceso.login(this.user));
      }
    }
  }



