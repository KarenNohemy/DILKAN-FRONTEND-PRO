import { Component } from '@angular/core';
import { PruebaComponent } from '../prueba/prueba.component';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  selectedTab: string = 'tab1';
  tab1Content: string = '';
  tab2Content: string = '';
  tab3Content: string = '';

  tab1Color: string = 'lightblue';
  tab2Color: string = 'lightgreen';
  tab3Color: string = 'lightpink';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
  // Lógica de tu componente aquí.
  mostrarFormularioModal: boolean = false;

  mostrarModal() {
    this.mostrarFormularioModal = true;
  }

  cerrarModal() {
    this.mostrarFormularioModal = false;

    
  }
}

