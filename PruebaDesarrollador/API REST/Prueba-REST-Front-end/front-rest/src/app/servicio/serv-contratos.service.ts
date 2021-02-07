import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { listaContratosI } from "../modelos/listaContratos.Interface";
import { crearContratoI } from '../modelos/crearContrato.Interface';

@Injectable({
  providedIn: 'root'
})
export class ServContratosService {

  url: string = "https://api-rest-contratos.herokuapp.com/api_rest/contratos/";

  constructor(private http: HttpClient) { }

  //Traer contratos
  getContratos(): Observable<listaContratosI[]> {
    return this.http.get<listaContratosI[]>(this.url);
  }

  //Consultar contrato por id
  getContratosById(tipo_id): Observable<listaContratosI> {
    let urlContrato = this.url + tipo_id;
    return this.http.get<listaContratosI>(urlContrato);
  }

  //Crear contrato
  crearContrato(datosContrato: crearContratoI) {
    return this.http.post(this.url, datosContrato);
  }

  //Editar contrato
  editarContrato(datosEdit: listaContratosI) {
    return this.http.put(this.url, datosEdit);
  }

  eliminarContrato(tipo_id) {
    let urlContratoElim = this.url + tipo_id;
    return this.http.delete(urlContratoElim);
  }

}
