import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

//IMPORTAR RUTAS
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AreaDeCodigoComponent } from './pages/area-de-codigo/area-de-codigo.component';
import { CrearProyectoComponent } from './pages/crear-proyecto/crear-proyecto.component';
import { LadingpageComponent } from './pages/ladingpage/ladingpage.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { MisProyectosComponent } from './pages/mis-proyectos/mis-proyectos.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';


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

  //CONFIGURAR RUTAS PÚBLICAS
  {path: 'landingpage', component: LadingpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},


  //CUALQUIERA QUE NO ESTE DEFINIDO SE ENVIA A PAGE-ERROR
  {path: '**', component: NopagefoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
