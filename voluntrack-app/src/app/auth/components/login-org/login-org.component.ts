import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-org',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule
  ],
  templateUrl: './login-org.component.html',
  styleUrl: './login-org.component.scss'
})
export class LoginOrgComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {
  }

  login() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.router.navigate(['/volunteer']);
  }
}
