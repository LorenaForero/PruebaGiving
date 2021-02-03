import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContratistasComponent } from './lista-contratistas/lista-contratistas.component';

import { HttpClientModule } from "@angular/common/http";
import { NuevoContratoComponent } from './nuevo-contrato/nuevo-contrato.component';
import { ModificarContratoComponent } from './modificar-contrato/modificar-contrato.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListaContratistasComponent,
    NuevoContratoComponent,
    ModificarContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
