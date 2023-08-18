import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import hljs from 'highlight.js';
import { } from 'ngx-highlightjs';

@Component({
  selector: 'app-area-de-codigo',
  templateUrl: './area-de-codigo.component.html',
  styleUrls: ['./area-de-codigo.component.css']
})
export class AreaDeCodigoComponent  implements AfterViewInit{
  
  constructor() { }

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
  

  htmlContent: string = '';
  cssContent: string = '';
  jsContent: string = '';
  iframeSrc: string = 'data:text/html;base64,PGgxPkhvbGEgbXVuZG88L2gxPg==';


  extractAndSend() {
    console.log('Contenido HTML:', this.htmlContent);
    console.log('Contenido CSS:', this.cssContent);
    console.log('Contenido JS:', this.jsContent);

    // Aquí puedes realizar una llamada a tu backend para enviar los contenidos
    // utilizando HttpClient u otras técnicas de comunicación en Angular.
  }

  // Propiedades para el contenido de los textareas y el iframe


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

  //++++++++++BOTONES++++++++++++++++++++++++++++++++++
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

  nuevoColaborador: string = '';

  agregarColaborador() {
    // Aquí puedes agregar la lógica para guardar el nombre del colaborador
    // en el proyecto o realizar alguna otra acción.
    console.log(`Colaborador agregado: ${this.nuevoColaborador}`);
    this.nuevoColaborador = ''; // Limpiar el campo después de agregar el colaborador.
  }

}






