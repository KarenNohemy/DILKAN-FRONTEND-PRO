import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { AreaDeCodigoComponent } from './area-de-codigo/area-de-codigo.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { ShareModule } from '../share/share.module';
import { ComponentModule } from '../component/component.module';
import { VentanaComponent } from './ventana/ventana.component';


@NgModule({
  declarations: [
    MiPerfilComponent,
    CrearProyectoComponent,
    AreaDeCodigoComponent,
    MisProyectosComponent,
    VentanaComponent
  ],
  exports: [
    MiPerfilComponent,
    CrearProyectoComponent,
    AreaDeCodigoComponent,
    MisProyectosComponent,
    VentanaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ShareModule,
    RouterModule,
    BrowserModule,
    ComponentModule,
    CommonModule, 
  ],
})
export class PagesModule { }
