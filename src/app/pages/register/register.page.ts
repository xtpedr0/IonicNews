import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  register() {
    if (this.registerForm.valid) {
      const { name, email, password, confirmPassword } = this.registerForm.value;
      
      if (password !== confirmPassword) {
        alert('As senhas não correspondem');
        return;
      }

      this.authService.register({ name, email }).subscribe(success => {
        if (success) {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
