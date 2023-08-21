import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

     // Lógica del componente de planes 
     mostrarFormularioModal: boolean = false;


     mostrarModal() {
       this.mostrarFormularioModal = true;
     }
   
     cerrarModal() {
       this.mostrarFormularioModal = false;
     }
  
}
