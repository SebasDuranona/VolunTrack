import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { VolunteerService } from '../../../modules/volunteer/services/volunteer/volunteer.service';
import { Volunteer } from '../../../modules/volunteer/services/volunteer/volunteer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder, private volunteerService: VolunteerService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register() {
    // Add your register logic here
    if (this.signupForm.valid) {
      const newVolunteer: Volunteer = this.signupForm.value;
      console.log(this.signupForm.value);

      this.volunteerService.addVolunteer([newVolunteer]).subscribe(
        (response: Volunteer) => {
          console.log('Volunteer added successfully: ', response);
          this.signupForm.reset();
        },
        (error) => {
          console.error('Error adding volunteer:', error);
        }
      );
    } else {
      // Handle form validation errors if needed
    }
  }

  onSubmit(): void {
    this.register()
    this.router.navigate(['/volunteer'])
  }
}
