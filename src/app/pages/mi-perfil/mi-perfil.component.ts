import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  modalOpen: boolean = false;
  constructor(private router: Router) {
    this.router.navigate(['/mi-perfil']);
  }

  guardar(){
    this.router.navigate(['/mi-perfil']);
    /*IMPLEMENTAR LÓGICA PARA GUARDAR DATOS */
  }
  eliminar(){
    this.router.navigate(['/mi-perfil']);
    /*IMPLEMENTAR LÓGICA PARA GUARDAR DATOS */

  }

}
