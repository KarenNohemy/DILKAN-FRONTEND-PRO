import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class proyectoService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  crearProyecto(proyecto: any): Observable<any> {
    const url = `${this.apiUrl}/proyectos/crear`; // Ajusta la URL según la ruta de tu backend
    return this.http.post(url, proyecto);
  }

  //Método para eliminar un proyecto
  eliminarProyecto(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/proyectos/eliminar/${id}`);
  }

  //Método para actualizar un proyecto
  actualizarProyecto(id: String, proyectoDto:any):  Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/proyectos/actualizar/${id}`, proyectoDto);
  }  

  //actualizar2
  updateProyecto2(proyecto: any):  Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/proyectos/actualizar/`, proyecto);
  }

  
  //listar todos los proyectos
  listarProyectos() { 
    return this.http.get(`${this.apiUrl}/proyectos/listar`);
  }

  //Metodo para obtener un proyecto por su id
  getProyectosId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/proyectos/listar/${id}`);
  }

  //Metodo para obtener un proyecto por su nombre
  getProyectoName(nombre: string) {
    return this.http.get<any>(`${this.apiUrl}/proyectos/listar/proyecto/${nombre}`);
  }

  // Método para obtener proyectos de un usuario
  getProyectosUsuario(usuario: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/proyectos/listar/proyectos/${usuario}`);
  }

  //Metodo para obtener todos los proyectos de una colaborador
  getProyectoColaborador(colaborador: string) {
    return this.http.get<any>(`${this.apiUrl}/proyectos/listar/proyectos/colaborador/${colaborador}`);
  }


  //Metodo para agregar colaborador a un proyecto
  agregarColaborador(id:string, proyectoDto:any):  Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/proyectos/agregarColaborador/${id}`, proyectoDto);
   }

}
