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
import { Project } from '../../services/projects/project';
import { Organization } from '../../services/organization/organization';
import { Request } from '../../services/requests/request';
import { Volunteer } from '../../services/volunteer/volunteer';

import { ProjectService } from '../../services/projects/project.service';
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


  constructor(private fb: FormBuilder, private http: HttpClient, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.cols = [
      { field: "organization.name", header: 'Organization' },
      { field: 'projectName', header: 'Project Name' }, 
      { field: 'projectDesc', header: 'Description' }, 
      { field: 'hours', header: 'Hours' }, 
      { field: 'status', header: 'Status'},
    ];

    // this.http.get<any>('http://localhost:8080/voluntrack/projects').subscribe(
    this.projectService.getProjects().subscribe(
      (response: any) => {
        console.log(response.data); // Log the response data to inspect its structure
        this.projects = response.data.map((project: any) => {
          const organization: Organization = {
            organizationId: project.organizations.organizationId,
            name: project.organizations.name,
            userName: project.organizations.userName,
            password: project.organizations.password
          };

          // const Request: Request | undefined = project.requests.reduce((latest: Request | undefined, request: Request) => {
          //   if (!latest || new Date(request.date) > new Date(latest.date)) {
          //     return request;
          //   } else {
          //     return latest;
          //   }
          // }, undefined);

          // const status: string = latestRequest ? (latestRequest.approved ? 'Approved' : 'Pending') : 'Pending';

          return {
            projectId: project.projectId,
            name: project.name,
            description: project.description,
            hours: parseInt(project.hours), // Convert string to number
            organization: organization
          };
        });
      },
      (error) => {
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
