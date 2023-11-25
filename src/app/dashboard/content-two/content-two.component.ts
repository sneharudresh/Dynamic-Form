import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-content-two',
  templateUrl: './content-two.component.html',
  styleUrls: ['./content-two.component.scss']
})
export class ContentTwoComponent {
  name="sneha";
  email!:"sneha.s";

  submit(form:Form){
    alert("calling")
  }
}
