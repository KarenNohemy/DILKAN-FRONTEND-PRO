import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

//IMPORTAR RUTAS
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LadingpageComponent } from './pages/ladingpage/ladingpage.component';
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


    //RUTA QUE SE ABRE CUANDO ESTA EL /
    {path: '', redirectTo: 'sidebar', pathMatch: 'full'},
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
