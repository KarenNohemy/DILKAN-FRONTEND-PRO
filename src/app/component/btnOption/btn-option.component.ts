import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-option',
  templateUrl: './btn-option.component.html',
  styleUrls: ['./btn-option.component.css']
})
export class BtnOptionComponent {

  rutaPagina: string = 'login';


  get getRuta() {
    return `/${this.rutaPagina}`;
  }

}
