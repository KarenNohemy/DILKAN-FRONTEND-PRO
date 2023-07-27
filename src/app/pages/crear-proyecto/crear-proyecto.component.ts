import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {

  nuevoColaborador: string = '';

  agregarColaborador() {
    // Aquí puedes agregar la lógica para guardar el nombre del colaborador
    // en el proyecto o realizar alguna otra acción.
    console.log(`Colaborador agregado: ${this.nuevoColaborador}`);
    this.nuevoColaborador = ''; // Limpiar el campo después de agregar el colaborador.
  }

}
