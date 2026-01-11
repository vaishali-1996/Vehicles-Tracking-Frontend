import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  userID = this.AuthService.getUserIdFromLocalStorage();
  profileForm!: FormGroup;
  successMsg = '';
  errorMsg = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: [{ value: '', disabled: true }],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      organization: ['']
    });

    this.loadProfile();
  }

  loadProfile(): void {



    if (this.userID !== null) {

   this.userService.getUserById(this.userID || 1).subscribe({
        next: (res: any) =>console.log(res)
      })
        
      this.userService.getUserById(this.userID || 1).subscribe({
        next: (res: any) => this.profileForm.patchValue(res),
        error: () => this.errorMsg = 'Failed to load profile'
      });
    } else {
      console.error('User not logged in');
    }

  }

  updateProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    if (this.userID != null) {

      this.userService.updateUser(this.userID, this.profileForm.getRawValue()).subscribe({
        next: () => {
          this.successMsg = 'Profile updated successfully';
          this.errorMsg = '';
          this.loading = false;
           setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 3000);
        },
        error: () => {
          this.errorMsg = 'Update failed';
          this.successMsg = '';
          this.loading = false;
        }
      });
    }
  }
}
