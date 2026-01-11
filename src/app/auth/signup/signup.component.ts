import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],

        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
            )
          ]
        ],

        mobile: [
          '',
          [
            Validators.required,
             Validators.minLength(10)
          ]
        ],

        organization: [''],

        password: ['', [Validators.required, Validators.minLength(6)]],

        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatch }
    );
  }

  passwordMatch(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const payload = this.signupForm.value;
    delete payload.confirmPassword;

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000);
    
    this.UserService.createUser(payload).subscribe({
      next: () => {
        this.showSuccess('Account created successfully');

        
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);

      },
      error: () => {
        this.errorMessage = 'Signup failed. Try again.';
      }
    });
  }

  showSuccess(msg:string) {
  this.successMessage = msg;

  setTimeout(() => {
    this.successMessage = '';
  }, 3000);
}

}
