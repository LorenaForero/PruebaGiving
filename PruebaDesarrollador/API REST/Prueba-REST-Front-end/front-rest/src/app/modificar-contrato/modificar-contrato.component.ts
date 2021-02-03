import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServContratosService } from "../servicio/serv-contratos.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { listaContratosI } from '../modelos/listaContratos.Interface';

@Component({
  selector: 'app-modificar-contrato',
  templateUrl: './modificar-contrato.component.html',
  styleUrls: ['./modificar-contrato.component.css']
})
export class ModificarContratoComponent implements OnInit {

  modificarForm = new FormGroup({
    tipo_id: new FormControl(''),
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    cat: new FormControl(''),
    cargo: new FormControl(''),
  });

  constructor(private activeRouter: ActivatedRoute,
    private router: Router,
    private servicio: ServContratosService) { }

  ngOnInit(): void {
    let tipo_id = this.activeRouter.snapshot.paramMap.get('idContrato');
    this.servicio.getContratosById(tipo_id).subscribe(data => {
      this.modificarForm.setValue({
        'tipo_id': data.tipo_id,
        'id': data.id,
        'nombre': data.nombre,
        'apellido': data.apellido,
        'edad': data.edad,
        'cat': data.cat,
        'cargo': data.cargo,
      });
    });
  }

  editarContrato(form: listaContratosI) {
    this.servicio.editarContrato(form).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['']);
  }

}
