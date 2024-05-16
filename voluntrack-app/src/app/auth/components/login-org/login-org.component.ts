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
import { Organization } from '../../../modules/volunteer/services/organization/organization';
import { MessageService } from 'primeng/api';
import { VolunteerService } from '../../../modules/volunteer/services/volunteer/volunteer.service';
import { OrganizationService } from '../../../modules/volunteer/services/organization/organization.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login-org',
  standalone: true,
  imports: [
    FloatLabelModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login-org.component.html',
  styleUrl: './login-org.component.scss',
})
export class LoginOrgComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private organizationService: OrganizationService,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    // check valid form
    if (this.loginForm.valid) {
      // get login credentials
      const credentials = {
        userName: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      // login
      this.organizationService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful: ', response);

          // navigate to the org dashboard
          this.router.navigate(['/organization'], {
            state: { Organization: response.data },
          });
        },
        (error) => {
          console.error('Login failed:', error);

          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Login Failed',
          });
        }
      );
    }
  }
}
