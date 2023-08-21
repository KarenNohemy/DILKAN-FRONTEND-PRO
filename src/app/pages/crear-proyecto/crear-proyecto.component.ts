import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.services';

import { AreaDeCodigoComponent } from '../area-de-codigo/area-de-codigo.component';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {

  nombre!: string;
  codigoHtml!: object|string;
  codigoCss !: object|string;
  codigoJs !: object|string;
  colaboradores!: object|string;
  usuario!: object|string;

  constructor(
    private router: Router, // Agrega la palabra clave private para inyectar el servicio Router
    private usuarioService: UsuarioService, 
    private authService: AuthService, 
    private areaDeCodigo: AreaDeCodigoComponent 
  ) {}


    //Crear proyecto 
    crearProyecto (){

      // Obtener el correo del usuario autenticado
      const correoUsuario = this.authService.getCorreoUsuario();

      // Obtener los contenidos HTML, CSS y JS del componente "Área de Código"/idProyecto
      const htmlContent = this.areaDeCodigo.htmlContent;
      const cssContent = this.areaDeCodigo.cssContent;
      const jsContent = this.areaDeCodigo.jsContent;
  


    // Llamar al servicio para crear el proyecto
    this.usuarioService.crearProyecto(
      this.nombre, 
      htmlContent, 
      cssContent, 
      jsContent, 
      this.colaboradores, 
      this.usuario
    ).subscribe(
      (response) => {
        console.log('Proyecto creado:', response.proyecto);
        // Aquí se debe redirigir al area-de-codigo de ese proyecto|| /area-de-codigo/idProyecto
        this.router.navigate(['/area-de-codigo']);
      }, 
      (error) => {
        console.error('Error al crear el proyecto:', error);

      }
    ); 

    }


  nuevoColaborador: string = '';

  agregarColaborador() {
    // Aquí puedes agregar la lógica para guardar el nombre del colaborador
    // en el proyecto o realizar alguna otra acción.
    console.log(`Colaborador agregado: ${this.nuevoColaborador}`);
    this.nuevoColaborador = ''; // Limpiar el campo después de agregar el colaborador.
  }

}
