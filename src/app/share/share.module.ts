import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [
    LadingpageComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
  ],
  exports: [
    LadingpageComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentModule
  ]
})
export class ShareModule { }
