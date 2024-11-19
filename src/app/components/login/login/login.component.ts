import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService
  ) {
  }
  checkoutForm = this.formBuilder.group({
    userId: '',
    password: ''
  });

  onSubmit(): void {
    this.loginService.active = true;
    console.log('UserId', this.checkoutForm.value.userId);
    console.log('Password', this.checkoutForm.value.password);
    this.checkoutForm.reset();
    this.router.navigateByUrl('home');

  }
}
