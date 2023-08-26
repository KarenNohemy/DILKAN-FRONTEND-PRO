import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import hljs from 'highlight.js';
import { } from 'ngx-highlightjs';
import { proyectoService } from 'src/app/services/proyecto.services';
@Component({
  selector: 'app-area-de-codigo',
  templateUrl: './area-de-codigo.component.html',
  styleUrls: ['./area-de-codigo.component.css']
})

export class AreaDeCodigoComponent implements AfterViewInit, OnInit {

  constructor(private proyectoService: proyectoService, private http: HttpClient) { }
  ngOnInit(): void {
    this.cargarProyecto();
  }


//+++++++++++++++++++++++++++++++++++GUARDAR PROYECTO+++++++++++++++++++++++++++++++++

  //Obtener el contenido de cada proyecto
  cargarProyecto() {
    this.proyectoService.getProyectosId(this._id)
      .subscribe((proyecto: any) => {
        this.updateIframe('htmlArea', proyecto.codigoHtml);
        this.updateIframe('cssArea', proyecto.codigoCss);
        this.updateIframe('jsArea', proyecto.codigoJs);

      });
  }

  //Guardar Id, y código de cada proyecto
  _id: string = localStorage.getItem('proyectoId') || '';
  htmlContent: string = '';
  cssContent: string = '';
  jsContent: string = '';
  iframeSrc: string = 'data:text/html;base64,PGgxPkhvbGEgbXVuZG88L2gxPg==';
  proyectoCargado: any = {};

  //Botón de guardar contenido
  //Ahora solo lo guarda y muesra en consola, debe guardarlo en el html,css y js del proyecto con el id del localStorage
  extractAndSend() {
    console.log('Contenido HTML:', this.htmlContent);
    console.log('Contenido CSS:', this.cssContent);
    console.log('Contenido JS:', this.jsContent);
    console.log('ID:', this._id);

    // Aquí puedes realizar una llamada a tu backend para enviar los contenidos
    // utilizando HttpClient u otras técnicas de comunicación en Angular.
    //URL del backend
    const apiUrlBack = 'http://localhost:4200';

    const dataCodigo = {
      _id: this._id,
      codigoHtml: this.htmlContent,
      codigoCss: this.cssContent,
      codigoJs: this.jsContent
    };



    // Envía los datos al backend utilizando HttpClient

    this.proyectoService.actualizarProyecto(this._id, dataCodigo).subscribe(
      (response) => {
        if(this._id == dataCodigo._id){
        //Me esta respondiendo con el proyecto pero sin guardar cambios
          console.log('Código nuevo de los text-area' ,dataCodigo);
          console.log('Respuesta del backend:', response);
        }

      },
      (error) => {
        console.error('Error al guardar los datos de los text-areas:', error);
      }
    );

}
  //++++++++++++++++++++++++++++++++++NAVEGADOR++++++++++++++++++++++++++++++++++
  // Método para actualizar el contenido del iframe
  updateIframe(textareaId: string, content: string) {
    if (textareaId === 'htmlArea') {
      this.htmlContent = content;
    } else if (textareaId === 'cssArea') {
      this.cssContent = content;
    } else if (textareaId === 'jsArea') {
      this.jsContent = content;
    }

    const iframe = document.getElementById('pantalla') as HTMLIFrameElement;
    const iframeDocument = iframe.contentWindow?.document;
    if (iframeDocument) {
      const combinedContent = `
        <html>
          <head>
            <style>${this.cssContent}</style>
            <script>${this.jsContent}</script>
          </head>
          <body>${this.htmlContent}</body>
        </html>
      `;
      iframeDocument.open();
      iframeDocument.write(combinedContent);
      iframeDocument.close();
    }
  }
  //++++++++++++++++++++++++++++++++++ESTILOS HIGHLIGH++++++++++++++++++++++++++++++++++
  ngAfterViewInit(): void {
    this.highlightTextarea('htmlArea');
  }
  highlightTextarea(textareaId: string) {
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    if (textarea) {
      hljs.highlightBlock(textarea);
    }
  }
  onHtmlChange(content: string) {
    this.updateIframe('htmlArea', content);
    this.highlightTextarea('htmlArea');
  }

  onCssChange(content: string) {
    this.updateIframe('cssArea', content);
    this.highlightTextarea('cssArea'); // Aplica el resaltado al cambiar el contenido
  }

  onJsChange(content: string) {
    this.updateIframe('JsArea', content);
    this.highlightTextarea('JsArea'); // Aplica el resaltado al cambiar el contenido
  }

  //+++++++++++++++++++++++++++++++++++BOTONES++++++++++++++++++++++++++++++++++
  @Output() undoClicked = new EventEmitter<void>();
  @Output() redoClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();
  @Output() closeClicked = new EventEmitter<void>();

  onUndo() {
    this.undoClicked.emit();
  }

  onRedo() {
    this.redoClicked.emit();
  }

  onSave() {
    this.saveClicked.emit();
  }

  onClose() {
    this.closeClicked.emit();
  }
  //+++++++++++++++++++++++++++++++++++AGREGAR COLABORADOR+++++++++++++++++++++++++++++++++
  nuevoColaborador: string = '';

  agregarColaborador() {
    // Aquí puedes agregar la lógica para guardar el nombre del colaborador
    // en el proyecto o realizar alguna otra acción.
    console.log(`Colaborador agregado: ${this.nuevoColaborador}`);
    this.nuevoColaborador = ''; // Limpiar el campo después de agregar el colaborador.
  }

}
