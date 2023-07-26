import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-option',
  templateUrl: './btn-option.component.html',
  styleUrls: ['./btn-option.component.css']
})
export class BtnOptionComponent {
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
