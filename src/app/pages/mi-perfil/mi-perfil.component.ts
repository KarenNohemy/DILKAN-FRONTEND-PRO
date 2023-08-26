import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent {
  //Guardar Id e inormación  de cada usuario
  _id: string = ''; // Inicializa como cadena vacía
  nombreUsuario!: string;
  correoElectronico!: string;
  contrasena!: string;
  fotoPerfil!: string;
  plan!: object | string;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService, // Asegúrate de importar correctamente el AuthService
    private http: HttpClient)
    {}

    ngOnInit(): void {
      this.cargarId();
    }

  //Obtener el contenido de cada perfil
  cargarId() {

    this._id = localStorage.getItem('usuarioId') || '';
    console.log('ID de usuario:', this._id); // Asegúrate de que estás obteniendo el ID aquí

    this.usuarioService.getUsuarioId(this._id).subscribe(
      (usuario: any) => {
        console.log('Datos de usuario:', usuario);
        this.nombreUsuario = usuario.nombreUsuario;
        this.correoElectronico = usuario.correoElectronico;
        this.contrasena = usuario.contrasena;
        this.fotoPerfil = usuario.fotoPerfil;
        this.plan = usuario.plan;
      },
      (error) => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );
  }

//+++++++++++++++++++++++++++++++++++GUARDAR ACTUALIZACIÓN DEL PERFIL+++++++++++++++++++++++++++++++++

  //Obtener el contenido de cada proyecto
  guardarActualizacion() {
    // Crear el objeto con los datos actualizados
    const usuarioActualizado = {
      _id: this._id,
      nombreUsuario: this.nombreUsuario,
      correoElectronico: this.correoElectronico,
      contrasena: this.contrasena,
      fotoPerfil: this.fotoPerfil,
      plan: this.plan,
    };

    console.log('Id: ', this._id);
    console.log('Name: ', this.nombreUsuario);
    console.log('Email: ', this.correoElectronico);
    console.log('Pass: ', this.contrasena);
    console.log('Photo: ', this.fotoPerfil);
    console.log('Plan: ', this.plan);

    // Envía los datos actualizados al backend utilizando HttpClient
    this.usuarioService.actualizarPerfil(this._id, usuarioActualizado).subscribe(
      (response) => {
        console.log('Información nueva', usuarioActualizado);
        console.log('Respuesta del backend:', response);
      },
      (error) => {
        console.error('Error al actualizar perfil:', error);
      }
    );
  }
  eliminarPerfil(){
    console.log('Cuenta eliminada');

    //this.router.navigate(['/ventana']);
    this.usuarioService.eliminarUsuario(this._id).subscribe(
      (response) => {
        console.log('Eliminar del backend:', response);

      },
      (error) => {
        console.error('Error al eliminar cuenta:', error);
      }
    );
  }




}
