import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  password: string = '';

  register() {
    // Add your register logic here
    console.log('firstname:', this.firstname);
    console.log('lastname:', this.lastname);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
