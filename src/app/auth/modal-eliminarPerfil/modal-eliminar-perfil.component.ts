import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-eliminar-perfil',
  templateUrl: './modal-eliminar-perfil.component.html',
  styleUrls: ['./modal-eliminar-perfil.component.css']
})
export class ModalEliminarPerfilComponent {
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
