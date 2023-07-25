import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { AreaDeCodigoComponent } from './area-de-codigo/area-de-codigo.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { ShareModule } from '../share/share.module';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    MiPerfilComponent,
    CrearProyectoComponent,
    AreaDeCodigoComponent,
    MisProyectosComponent,
  ],
  exports: [
    MiPerfilComponent,
    CrearProyectoComponent,
    AreaDeCodigoComponent,
    MisProyectosComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule,
    ComponentModule
  ],
})
export class PagesModule { }
