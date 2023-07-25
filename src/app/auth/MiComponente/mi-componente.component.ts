import { Component } from '@angular/core';
import { PruebaComponent } from '../prueba/prueba.component';

@Component({
  selector: 'app-mi-componente',
  template: `
    <button (click)="openModal()">Abrir Modal</button>
    <app-modal *ngIf="modalOpen"></app-modal>
  `,
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  // Lógica de tu componente aquí.
  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }
}

