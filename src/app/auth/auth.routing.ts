import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LadingpageComponent } from '../share/ladingpage/ladingpage.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ModalComponent } from './modal-plan/modal.component';
import { ModalEliminarPerfilComponent } from './modal-eliminarPerfil/modal-eliminar-perfil.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MiComponenteComponent } from './MiComponente/mi-componente.component';
import { VentanaComponent } from '../pages/ventana/ventana.component';




const routes: Routes = [
 //CONFIGURAR RUTAS PÚBLICAS
 {path: 'landingpage', component: LadingpageComponent},
 {path: 'login', component: LoginComponent},
 {path: 'registro', component: RegistroComponent},
 {path: 'modal', component: ModalComponent},
 {path: 'modal-eliminarPerfil', component: ModalEliminarPerfilComponent},
 {path:'prueba', component: PruebaComponent},
 {path: 'MiComponente', component: MiComponenteComponent},
 {path: 'ventana', component: VentanaComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
