import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
    //metodo para autentificar mediante el uso de la coleccion en mongo
     //LOGIN DE USUARIO 
  //metodo para hacer login de un usuario con un jwt
  login(correoElectronico: string, contrasena: string) {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login/`, { correoElectronico, contrasena });
  } 


  //REGISTRO DE USUARIO 
  registrarUsuario ( datosUsuario: any): Observable<any> {
    const url = `${this.apiUrl}/usuarios/crear`;
    return this.http.post(url, datosUsuario);
  }



    //Metodo Para autentificar al usuario con Facebook


    //Metodo Para autentificar al usuario con correo Y contraseña

}


 