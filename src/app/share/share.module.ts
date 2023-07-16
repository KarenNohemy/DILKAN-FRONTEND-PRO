import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingpageComponent } from './ladingpage/ladingpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



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
    RouterModule
  ]
})
export class ShareModule { }
