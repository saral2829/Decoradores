import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormHijoComponent } from './form-hijo/form-hijo.component';
import { FormPadreComponent } from './form-padre/form-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormularioComponent,
    FormHijoComponent,
    FormPadreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
