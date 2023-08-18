import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*HIGHTLINE */
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ShareModule } from "./share/share.module";

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NopagefoundComponent,
        PagesComponent,
        
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        
        ShareModule,
        AuthModule,
        RouterModule,
        HttpClientModule
    ]
})


export class AppModule { }
