import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.component.html',
  styleUrls: ['./ventana.component.css']
})
export class VentanaComponent {
  isOpen: boolean = true;
  constructor(private router: Router) { }

  openModal() {
    this.isOpen = true;
    this.router.navigate(['/mi-perfil']);
    /*IMPLEMENTAR LÓGICA PARA GUARDAR DATOS */
  }
  closeModal() {
    this.isOpen = false;
    this.router.navigate(['/mi-perfil']);
    /*IMPLEMENTAR LÓGICA PARA GUARDAR DATOS */
  }

}
