import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    //LOGIN DE USUARIO 
  //metodo para hacer login de un usuario con un jwt
  login(correoElectronico: string, contrasena: string) {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login/`, { correoElectronico, contrasena });
  } 


  //REGISTRO DE USUARIO 
  registrarUsuario() {
    // Lógica para registrar un usuario aquí
  }

     // Lógica del componente de planes 
     mostrarFormularioModal: boolean = false;


     mostrarModal() {
       this.mostrarFormularioModal = true;
     }
   
     cerrarModal() {
       this.mostrarFormularioModal = false;
     }
  
}
