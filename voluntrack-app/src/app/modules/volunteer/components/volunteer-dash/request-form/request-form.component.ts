import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {VolunteerService} from "../../../services/volunteer.service";
@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FloatLabelModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    DialogModule
  ],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.scss'
})
export class RequestFormComponent {
  date: Date = new Date();
  hours: number;

  requestForm: FormGroup;
  organizations: [any];

  selectedOrg: any;


  displayModal:boolean = false;
  constructor(private fb: FormBuilder) {
    this.organizations = [
      {label: "Humane Society"}
    ];

    this.hours = 0;

    this.requestForm = fb.group({
      org: [''],
      date: [''],
      hours: [''],
    })
  }

  search() {
    this.selectedOrg = this.organizations[0]
  }

  requestHours() {

  }
  showDialog() {
    this.displayModal = true;
  }


}
