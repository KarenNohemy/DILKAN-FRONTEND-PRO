import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Importa el operador tap

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    private apiUrl = 'https://dilkan-backend-production.up.railway.app';

  constructor(private http: HttpClient) { }
    //metodo para autentificar mediante el uso de la coleccion en mongo
     //LOGIN DE USUARIO Y OBTENER SU ID
     login(correoElectronico: string, contrasena: string) {
      return this.http.post<any>(`${this.apiUrl}/usuarios/login/`, { correoElectronico, contrasena }).pipe(
        tap(response => {
          if (response && response.usuarioId) {
            localStorage.setItem('usuarioId', response.usuarioId);
            console.log('Id que se trae después del login: ', response.usuarioId); // Asegúrate de que estás recibiendo el ID aquí
          }
        })
      );
    }



  //REGISTRO DE USUARIO
  registrarUsuario ( datosUsuario: any): Observable<any> {
    const url = `${this.apiUrl}/usuarios/crear`;
    return this.http.post(url, datosUsuario);
  }


  getCorreoUsuario(){
    return 'correo@example.com';
  }
    //Metodo Para autentificar al usuario con Facebook


    //Metodo Para autentificar al usuario con correo Y contraseña

}


