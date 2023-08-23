import { Component, OnInit } from '@angular/core';
import { proyectoService } from 'src/app/services/proyecto.services';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  proyectos: any;
  

  constructor(private proyectoService: proyectoService) {}

  ngOnInit() {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.proyectoService.getProyectosUsuario("Karen Nohemy")
      .subscribe( (proyectos: any) => {
        this.proyectos = proyectos;
        console.log(this.proyectos);
      });

    } ;

  }
  
