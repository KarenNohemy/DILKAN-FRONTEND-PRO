import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { SidebarComponent } from '../share/sidebar/sidebar.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { AreaDeCodigoComponent } from './area-de-codigo/area-de-codigo.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';


const routes: Routes = [
  //RUTAS PROTEGIAS
  {path:'' ,
  component: PagesComponent,
    children: [
      {path: 'sidebar', component: SidebarComponent},
      {path: 'mi-perfil', component: MiPerfilComponent},
      {path: 'crear-proyecto', component: CrearProyectoComponent},
      {path: 'area-de-codigo', component: AreaDeCodigoComponent},
      {path: 'mis-proyectos', component: MisProyectosComponent},
      //RUTA QUE SE ABRE CUANDO ESTA EL /
      {path: '', redirectTo: '/mis-proyectos', pathMatch: 'full'},
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
