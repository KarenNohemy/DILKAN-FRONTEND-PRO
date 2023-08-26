import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { proyectoService } from 'src/app/services/proyecto.services';

import { AreaDeCodigoComponent } from '../area-de-codigo/area-de-codigo.component';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {

  nombre!: string;
  colaboradores!: object | string;
  


  constructor(
    private router: Router,
    private proyectoService: proyectoService // Asegúrate de importar el servicio correctamente
  ) { }

  ngOnInit() {
    // Llama al método del servicio para obtener los colaboradores
    //this.obtenerColaboradores();
  }

  crearProyecto() {
    const proyecto = {
      nombre: this.nombre,
      codigoHtml: {},  // Agrega aquí el contenido de código HTML
      codigoCss: {},   // Agrega aquí el contenido de código CSS
      codigoJs: {},    // Agrega aquí el contenido de código JavaScript
      colaboradores: this.colaboradores,
      usuario: 'Karen Nohemy' // Agrega aquí el nombre de usuario
    };
  
    this.proyectoService.crearProyecto(proyecto).subscribe(
      (response) => {
        // Aquí puedes manejar la respuesta del servicio si es necesario
        console.log('Proyecto creado:', response);
  
        // Redirigir al usuario a la página de mis proyectos
        this.router.navigate(['/mis-proyectos']);
      },
      (error) => {
        console.error('Error al crear el proyecto:', error);
      }
    );

  }

  obtenerColaboradores() {
    /*this.proyectoService.obtenerColaboradores().subscribe(
      (response) => {
        // Aquí puedes manejar la respuesta del servicio
        this.colaboradores = response;
      },
      (error) => {
        console.error('Error al obtener los colaboradores:', error);
      }
    );*/
  }
  
}
