import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CardModule,InputTextModule,ReactiveFormsModule,ButtonModule, NavComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder){}

  get email(){
    return this.loginForm.controls['email'];
  }
  get password(){
    return this.loginForm.controls['password'];
  }
}
