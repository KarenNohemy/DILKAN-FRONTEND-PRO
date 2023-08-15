import { Component } from '@angular/core';
import { PruebaComponent } from '../prueba/prueba.component';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  // Lógica de tu componente aquí.
  mostrarFormularioModal: boolean = false;

  mostrarModal() {
    this.mostrarFormularioModal = true;
  }

  cerrarModal() {
    this.mostrarFormularioModal = false;
  }
}

