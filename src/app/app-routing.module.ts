import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


//MODULOS
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
//IMPORTAR RUTAS
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
 //CUALQUIERA QUE NO ESTE DEFINIDO SE ENVIA A PAGE-ERROR
 {path: '**', component: NopagefoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
