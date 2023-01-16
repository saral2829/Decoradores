import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-padre',
  templateUrl: './form-padre.component.html',
  styleUrls: ['./form-padre.component.css']
})
export class FormPadreComponent {

  form: any;

  agregarCampo(form: any) {
    this.form = form;
    console.log(this.form);
  }

}
