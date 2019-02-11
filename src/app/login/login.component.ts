import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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
  constructor(private formBuilder: FormBuilder,private router:Router,private authservice:AuthenticationService){ }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
      this.authservice.login(this.form.email_id.value,this.form.password.value)
      .subscribe(
        data => {
          console.log(data);
          if(data==true)
          {
            this.router.navigate(['/Resourcelist']);
          }
          else{
            alert("invalid username or password");
          }
        },
        error => {
          console.log(error);
          if (this.loginForm.invalid) {
            return;
          }
        }
      );
  }
}