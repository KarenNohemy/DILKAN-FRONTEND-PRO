import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-de-codigo',
  templateUrl: './area-de-codigo.component.html',
  styleUrls: ['./area-de-codigo.component.css']
})
export class AreaDeCodigoComponent  {


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

}
