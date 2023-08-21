import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }
  
      /*
      MÉTODO PARA CREAR PROYECTO
  
       */
    crearProyecto (nombre: string, colaboradores: object|string, usuario: object|string, 
      codigoHtml: object|string, codigoCss: object|string, codigoJs: object|string, 
       ){
          return this.http.post<any>(`${this.apiUrl}/proyectos/crear`, 
          {nombre, colaboradores, usuario, codigoHtml,codigoCss, codigoJs}); 
    }
    

     // Método para obtener proyectos de un usuario
    getProyectosUsuario(usuario: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/proyectos/listar/proyectos/${usuario}`);
    }
   
    //Metodo para obtener colaboradores 
    addColaborador(id: string, createProyectoDTO: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/proyectos/agregarColaborador/${id}`, createProyectoDTO);
    }
     mostrarFormularioModal: boolean = false;


     mostrarModal() {
       this.mostrarFormularioModal = true;
     }
   
     cerrarModal() {
       this.mostrarFormularioModal = false;
     }
  
}
