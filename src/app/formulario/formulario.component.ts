import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  nombre: string;
  dni: string;
  estado_civil: string;
}
  


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  model = {
    nombre: '',
    dni: '',
    estado_civil: '',
  };

  @Output() formSubmit = new EventEmitter<ContactForm>();

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
  }

}
