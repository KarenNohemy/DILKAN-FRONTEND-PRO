import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

    
  //Método para actualizar perfil 
  actualizarPerfil(id: string, usuarioDTO:any):  Observable<any>{
    const url = `${this.apiUrl}/usuarios/actualizar/${id}`;
    return this.http.put( url, usuarioDTO);
  }

  eliminarUsuario (id:string){
    return this.http.delete<any>(`${this.apiUrl}/usuarios/eliminar/${id}`)
  }
  

  







     mostrarFormularioModal: boolean = false;


     mostrarModal() {
       this.mostrarFormularioModal = true;
     }
   
     cerrarModal() {
       this.mostrarFormularioModal = false;
     }
  
}
