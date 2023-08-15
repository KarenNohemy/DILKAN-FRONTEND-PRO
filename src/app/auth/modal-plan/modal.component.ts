import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegistroComponent } from '../registro/registro.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter();

  tipoPlan!: string;
  costoMensual!: BigInteger;
  fechaInicio!: string; 
  fechaFin!: string; 

  // Referencia al componente RegistroComponent
  // registroComponent: RegistroComponent;

  constructor(
    private router: Router, // Agrega la palabra clave private para inyectar el servicio Router
    private usuarioService: UsuarioService, 
    private registroComponent: RegistroComponent // Inyecta el componente RegistroComponent

  ){
    this.registroComponent = registroComponent;
  }


  guardarInfo() {
    // Verificar si los campos tiene valores antes de usarlos
    if (!this.tipoPlan || !this.costoMensual || !this.fechaInicio || !this.fechaFin) {
      // Manejar el caso en el que alguno de los campos esté vacío
      console.log('Por favor llene e formulario de planes (Existe la opción Free)');
      return;
    }

    /*
    //Guardar usuario en Registro 
    this.registroComponent.registerForm(); 

    this.usuarioService.registrarUsuario(this.tipoPlan, this.costoMensual, this.fechaInicio, this.fechaFin).subscribe(
      (response) => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Respuesta del servidor:', response);
      }, 
      (error) => {
        // Manejar el error si ocurre algún problema en el servidor
        console.error('Error al iniciar sesión:', error);
    }
    );
    */
    
  }

  cerrarModal (){
    this.usuarioService.cerrarModal

   }



}
