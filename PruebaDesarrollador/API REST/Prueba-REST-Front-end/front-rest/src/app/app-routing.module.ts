import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaContratistasComponent } from './lista-contratistas/lista-contratistas.component';
import { ModificarContratoComponent } from './modificar-contrato/modificar-contrato.component';
import { NuevoContratoComponent } from './nuevo-contrato/nuevo-contrato.component';

const routes: Routes = [
  { path: '', component: ListaContratistasComponent },
  { path: 'nuevoContrato', component: NuevoContratoComponent },
  { path: 'modContrato/:idContrato', component: ModificarContratoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
