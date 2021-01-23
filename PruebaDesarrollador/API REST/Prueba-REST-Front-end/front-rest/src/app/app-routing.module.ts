import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaContratistasComponent } from './lista-contratistas/lista-contratistas.component';

const routes: Routes = [
  { path: '', component: ListaContratistasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
