import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Resources Management system';
  loginForm: FormGroup;
  submitted = false;
  get form() { 
    return this.loginForm.controls;
   }
  constructor(  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
      }
  }
}