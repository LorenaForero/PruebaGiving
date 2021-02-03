import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { crearContratoI } from '../modelos/crearContrato.Interface';
import { ServContratosService } from '../servicio/serv-contratos.service';

@Component({
  selector: 'app-nuevo-contrato',
  templateUrl: './nuevo-contrato.component.html',
  styleUrls: ['./nuevo-contrato.component.css']
})
export class NuevoContratoComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute,
    private router: Router,
    private servicio: ServContratosService) { }

  crearForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    cat: new FormControl(''),
    cargo: new FormControl(''),
  });

  datosContrato: crearContratoI;

  ngOnInit(): void {
  }

  crearContrato(nuevoContrato: crearContratoI) {
    this.datosContrato = nuevoContrato;
    this.servicio.crearContrato(this.datosContrato).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['']);
  }

}
