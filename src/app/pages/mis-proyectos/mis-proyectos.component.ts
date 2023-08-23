import { Component, OnInit } from '@angular/core';
import { proyectoService } from 'src/app/services/proyecto.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  proyectos: any;
  

  constructor(private proyectoService: proyectoService, private router: Router) {}

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

  proyectoId(id: string) {
    //redirecciona a la pagina enviando como parametro el id del proyecto  routerLink="/area-de-codigo/{{ proyecto.id }}"
    console.log(id);
    localStorage.setItem('proyectoId', id);
    this.router.navigate(['/area-de-codigo']);
  }

  }
  
 