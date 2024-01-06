import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, CardModule, InputTextModule,ReactiveFormsModule,ButtonModule,NavComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword : ['', Validators.required]
  })
  constructor(private fb:FormBuilder){}

  get fullName(){
    return this.registerForm.controls['fullName'];
  }
  get email(){
    return this.registerForm.controls['email'];
  }
  get password(){
    return this.registerForm.controls['password'];
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
}
