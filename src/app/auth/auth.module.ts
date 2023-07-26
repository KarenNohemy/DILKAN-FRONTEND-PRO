import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentModule } from '../component/component.module';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ModalComponent } from './modal-plan/modal.component';
import { ModalEliminarPerfilComponent } from './modal-eliminarPerfil/modal-eliminar-perfil.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MiComponenteComponent } from './MiComponente/mi-componente.component';
import { VentanaComponent } from './ventana/ventana.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ModalComponent,
    ModalEliminarPerfilComponent,
    PruebaComponent,
    MiComponenteComponent,
    VentanaComponent
  ],
  exports:[
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule
  ]
})
export class AuthModule { }
