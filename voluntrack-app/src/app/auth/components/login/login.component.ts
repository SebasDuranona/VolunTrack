import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { VolunteerService } from '../../../modules/volunteer/services/volunteer/volunteer.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private volunteerService: VolunteerService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    // Add your login logic
    if (this.loginForm.valid) {
      const credentials = {
        userName: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.volunteerService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.volunteerService.pushData(response);
          // Navigate to another route after a successful login
          this.router.navigate(['/volunteer'], {
            state: { Volunteer: response.data },
          });
        },
        (error) => {
          console.error('Login failed:', error);
          // Optionally, handle different error cases for the user
        }
      );
    }
  }
}
