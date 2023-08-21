import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  proyectos: any[] = []; 

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getProyectosUsuario('nombreUsuario').subscribe(
      (response) => {
        this.proyectos = response.proyectos;
      },
      (error) => {
        console.error('Error al obtener proyectos:', error);
      }
    );
  }
}