import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {

   nombreUsuario!: string;
   correoElectronico!: string;
   contrasena!: string;
   fotoPerfil!: string;
   plan!: object | string;

   
  constructor(
    private router: Router, 
    usuarioService: UsuarioService) 
    {}

  guardarActualizacion() {
    /* IMPLEMENTAR LÓGICA PARA GUARDAR DATOS */
    console.log('Nombre de usuario:', this.nombreUsuario);
    console.log('Correo electrónico:', this.correoElectronico);
    console.log('Contraseña:', this.contrasena);
    console.log('Foto de perfil:', this.fotoPerfil);
    console.log('Plan:', this.plan);

    //this.ventanaComponent.openModal(); 
    if (!this.nombreUsuario || !this.correoElectronico || !this.contrasena || !this.fotoPerfil || !this.plan) {
      // Manejar el caso en el que alguno de los campos esté vacío
      console.log('Hay datos nuevos');
      return;
    
    }

    //Llamar al servicio usuarioservice.actualizarPerfil

    
}
  eliminarPerfil(){
    /*IMPLEMENTAR LÓGICA PARA GUARDAR DATOS */
    console.log('Cuenta eliminada');
    this.router.navigate(['/ventana']); 
  }

  


}
