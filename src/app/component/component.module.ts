import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOptionComponent } from './btnOption/btn-option.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BtnOptionComponent
  ],
  exports:[
    BtnOptionComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule
  ]
})
export class ComponentModule { }
