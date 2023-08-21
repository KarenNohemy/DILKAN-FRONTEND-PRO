import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

import { AuthService } from 'src/app/services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombreUsuario: ['Dilan Almendarez', [Validators.required, Validators.minLength(15)]],
      correoElectronico: ['prueba22@gmail.com', [Validators.required, Validators.minLength(15), Validators.email]],
      contrasena: ['dilkan2023.', [Validators.required, Validators.minLength(8)]],
      fotoPerfil: ['perfil2.png'],
      plan: this.fb.group({
        costoMensual: ['1.00'],
        fechaInicio: ['15/2/2021'],
        fechaFinal: ['25/3/2022']
      }),
      
    });
  }

  crearUsuario() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      // Llamar al servicio para registrar al usuario
      this.authService.registrarUsuario(this.registerForm.value)
        .subscribe(
          (response) => {
            // Manejar la respuesta del servidor si es necesario
            console.log('Respuesta del servidor:', response);

            // Redirigir al usuario a la página de inicio
            this.router.navigate(['/mis-proyectos']);
          },
          (error) => {
            // Manejar el error si es necesario
            console.error('Error en el registro:', error);
          }
        );
    } else {
      console.log('El formulario no es válido');
    }
  }

  mostrarFormularioModal: boolean = false;

  mostrarModal() {
    this.mostrarFormularioModal = true;
  }

  cerrarModal() {
    this.mostrarFormularioModal = false;
  }
}
