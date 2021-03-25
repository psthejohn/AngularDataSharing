import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signUpMethod(signInForm: NgForm) {
    console.log(signInForm);
    console.log(signInForm.value.emailAdressName); // Extracting Template Field - Email Here.
    console.log(signInForm.value.passwordName); // Extracting Template Field - Password Here.
    console.log(signInForm.value.checkOutName); // Extracting Template Field - Checkout Here.

  }

}
