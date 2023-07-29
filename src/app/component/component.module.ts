import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOptionComponent } from './btnOption/btn-option.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BtnOptionComponent
  ],
  exports:[
    BtnOptionComponent,
    FormsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentModule { }
