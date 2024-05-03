import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-signup-org',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
  ],
  templateUrl: './signup-org.component.html',
  styleUrl: './signup-org.component.scss'
})
export class SignupOrgComponent {
  organization: string = '';
  username: string = '';
  password: string = '';

  register() {
    // Add your login logic here
    console.log('organization:', this.organization);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
