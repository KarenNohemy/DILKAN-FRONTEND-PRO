import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correoElectronico!: string;
  contrasena!: string;

  constructor(
    private router: Router, // Agrega la palabra clave private para inyectar el servicio Router
    private usuarioService: UsuarioService
  ) {}

  // Método para iniciar sesión
  iniciarSesion() {
    // Verificar si correoElectronico y contrasena tienen valores antes de usarlos
    if (!this.correoElectronico || !this.contrasena) {
      // Manejar el caso en el que alguno de los campos esté vacío
      console.log('Por favor ingrese correo electrónico y contraseña');
      return;
    }

    // Llamar al método del servicio para iniciar sesión
    this.usuarioService.login(this.correoElectronico, this.contrasena).subscribe(
      (response) => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Respuesta del servidor:', response);
        // Guardar el token en el local storage
        localStorage.setItem('token', response.token);

        // Redirigir al usuario a la página de inicio
        this.router.navigate(['/mis-proyectos']);
      },
      (error) => {
        // Manejar el error si ocurre algún problema en el servidor
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
