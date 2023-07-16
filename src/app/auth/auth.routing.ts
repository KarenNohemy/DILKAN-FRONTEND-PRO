import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LadingpageComponent } from '../share/ladingpage/ladingpage.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';




const routes: Routes = [
 //CONFIGURAR RUTAS PÚBLICAS
 {path: 'landingpage', component: LadingpageComponent},
 {path: 'login', component: LoginComponent},
 {path: 'registro', component: RegistroComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
