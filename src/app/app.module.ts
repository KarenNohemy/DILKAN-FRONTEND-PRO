import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { LadingpageComponent } from './pages/ladingpage/ladingpage.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { CrearProyectoComponent } from './pages/crear-proyecto/crear-proyecto.component';
import { AreaDeCodigoComponent } from './pages/area-de-codigo/area-de-codigo.component';
import { MisProyectosComponent } from './pages/mis-proyectos/mis-proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NopagefoundComponent,
    LadingpageComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    PagesComponent,
    MiPerfilComponent,
    CrearProyectoComponent,
    AreaDeCodigoComponent,
    MisProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
