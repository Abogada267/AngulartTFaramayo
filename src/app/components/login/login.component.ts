import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm: FormGroup | undefined;
  

  constructor (private fb: FormBuilder)
  {
    this.loginForm = this.fb.group({
    email: this.fb.control('',[Validators.email]),
    password:this.fb.control('',[Validators.required]),
  })
  }
  onSubmit(): void {
    if (this.loginForm?.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      console.log(this.loginForm?.value);
    }
  }
  }