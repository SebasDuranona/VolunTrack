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
import { CardModule } from 'primeng/card';
import { Subscription, filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Project } from './projects/project';

import { ProjectService } from './projects/project.service';
import { RequestFormComponent } from './request-form/request-form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteer-dash',
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
    DialogModule,
    CardModule,
    CommonModule,
    RequestFormComponent
  ],
  templateUrl: './volunteer-dash.component.html',
  styleUrl: './volunteer-dash.component.scss'
})
export class VolunteerDashComponent {
  date: Date = new Date();



  displayModal:boolean = false;

  
  projects: Project[] = [];
  cols: any[] = [];


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.cols = [
      { field: "organization", header: 'Organization' },
      { field: 'date', header: 'Date' },
      { field: 'hours', header: 'Hours' },
      { field: 'status', header: 'Status' },
    ];

    this.http.get<Project[]>('http://localhost:8080/voluntrack/projects').subscribe(
      data => {
        console.log(data)
        this.projects = data;
      },
      error => {
        console.log('Error fetching projects: ', error);
      }
    );
  }

  requestHours() {

  }

  // get list of projects
  // getProjectList() {
  //   this.projectService.getProject().subscribe(
  //     response => {
  //       this.projects = response;
  //     }
  //   )
  // }
  showDialog() {
    this.displayModal = true;
  }

  search() {
  }
}
