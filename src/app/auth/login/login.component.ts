import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPassword = false;
  errorMessage = '';
   public showSuccessAlert = false;
  public successMessage = '';


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]]
      });

  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  loginError = '';

onSubmit(): void {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.authService.login(this.loginForm.value).subscribe({
    next: (res) => {
      this.authService.setToken(res.token);
      this.showSuccess('login successfully');     
  
  setTimeout(() => {
    this.router.navigate(['/dashboard']);
  }, 1500); 
    },
    error: () => {
      this.loginError = 'Invalid email or password';
    }
  });
}

showSuccess(msg:string) {
  this.successMessage = msg;

  setTimeout(() => {
    this.successMessage = '';
  }, 3000);
}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
