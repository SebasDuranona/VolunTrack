import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { OrganizationService } from '../../../modules/volunteer/services/organization/organization.service';
import { Organization } from '../../../modules/volunteer/services/organization/organization';

@Component({
  selector: 'app-signup-org',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup-org.component.html',
  styleUrl: './signup-org.component.scss'
})
export class SignupOrgComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private organizationService: OrganizationService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register() {
    // Add your login logic here
    if (this.signupForm.valid) {
      const newOrganization: Organization = this.signupForm.value;

      this.organizationService.addOrganization(newOrganization).subscribe(
        (response: Organization) => {
          console.log('Organization added successfully: ', response);
          this.signupForm.reset()
        },
        (error) => {
          console.error('Error adding Organization:', error); 
        }
      );
    } else {
      // Handle form validation errors if needed
    }
  }

  onSubmit():void {
    this.register()
  }
}
