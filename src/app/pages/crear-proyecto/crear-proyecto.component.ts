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
  codigoHtml!: object | string;
  codigoCss!: object | string;
  codigoJs!: object | string;
  usuario!: object | string;


  constructor(
    private router: Router,
    private proyectoService: proyectoService // Asegúrate de importar el servicio correctamente
  ) { }

  ngOnInit() {
    // Llama al método del servicio para obtener los colaboradores
    //this.obtenerColaboradores();
  }

  crearProyecto() {
    this.proyectoService.crearProyecto(
      this.nombre,
      this.colaboradores,
      this.codigoHtml, 
      this.codigoCss, 
      this.codigoJs, 
      this.usuario
    ).subscribe(
      (response) => {
        console.log('Proyecto creado:', response.proyecto);
        // Aquí se debe redirigir al area-de-codigo de ese proyecto|| /area-de-codigo/idProyecto
        //this.router.navigate(['/area-de-codigo']);
      },
      (error) => {
        console.error('Error al crear el proyecto:', error);

      }
    );

  }

  obtenerColaboradores() {
    /*
    // Llama al método del servicio para obtener los colaboradores
    this.proyectoService.getProyectoColaborador(
      this.colaboradores
    ).subscribe(
      (response) => {
        this.colaboradores = response.colaborador; // Asigna el colaborador a la lista
        
        console.log(response)
      },
      (error) => {
        console.error('Error al obtener los colaboradores:', error);
      }
    );
    */
  }
  
}
