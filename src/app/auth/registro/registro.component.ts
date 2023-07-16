import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {

  public registerForm = this.fb.group({
    nombre:['Karen Nohemy Lopez Cerrato', [Validators.required, Validators.minLength(15)]],
    correo:['karen.lopez@gmail.com', [Validators.required, Validators.minLength(15), Validators.email]],
    contrasenia:['dilkan2023.', [Validators.required, Validators.minLength(8) ]],
    plan:['Avanzado', [Validators.required]],
    foto:['perfil.png'],
  });


  constructor(private fb: FormBuilder){}

}
