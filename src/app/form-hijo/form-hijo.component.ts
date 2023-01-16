import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-hijo',
  templateUrl: './form-hijo.component.html',
  styleUrls: ['./form-hijo.component.css']
})
export class FormHijoComponent  {

  @Input() valores!: string;

}
