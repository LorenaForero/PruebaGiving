import { Component, OnInit } from '@angular/core';
import { ServContratosService } from "../servicio/serv-contratos.service";
import { listaContratosI } from "../modelos/listaContratos.Interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-contratistas',
  templateUrl: './lista-contratistas.component.html',
  styleUrls: ['./lista-contratistas.component.css']
})
export class ListaContratistasComponent implements OnInit {

  listaContratos: listaContratosI[];

  constructor(private servicio: ServContratosService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.getContratos().subscribe(data => {
      this.listaContratos = data;
    })
  }

  modificarContrato(tipo_id) {
    this.router.navigate(['modContrato', tipo_id]);
  }

  eliminarContrato(tipo_id) {
    return this.servicio.eliminarContrato(tipo_id).subscribe(data => {
      location.reload();
    });
  }

}
