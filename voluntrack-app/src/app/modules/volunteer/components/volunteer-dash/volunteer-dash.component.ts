import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Project } from '../../services/projects/project';
import { Request } from '../../services/requests/request';
import { Volunteer } from '../../services/volunteer/volunteer';

import { ProjectService } from '../../services/projects/project.service';
import { RequestFormComponent } from './request-form/request-form.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VolunteerService } from '../../services/volunteer/volunteer.service';
import { RequestService } from '../../services/requests/request.service';

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
    RequestFormComponent,
  ],
  templateUrl: './volunteer-dash.component.html',
  styleUrl: './volunteer-dash.component.scss',
})
export class VolunteerDashComponent {
  projects: Project[] = [];
  cols: any[] = [];
  requests: Request[] = [];

  // Current volunteer
  volunteer: Volunteer;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private projectService: ProjectService,
    private router: Router,
    private volunteerService: VolunteerService,
    private requestService: RequestService
  ) {
    // Retrieve the state passed via router
    const navigation = this.router.getCurrentNavigation();
    this.volunteer = navigation?.extras.state as Volunteer;
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'requestInfo', header: 'Request Info' },
      { field: 'hours', header: 'Hours Requested' },
      { field: 'approved', header: 'Status', customTemplate: true },
    ];

    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getRequests().subscribe(
      (response: any) => {
        this.requests = response.data.map((request: any) => ({
          requestId: request.requestId,
          requestInfo: request.requestInfo,
          hours: request.hours,
          approved: request.approved ? 'True' : 'False',
          volunteerId: request.volunteerId,
          projectId: request.projectId,
        }));
      },
      (error) => {
        console.log('Error fetching requests:', error);
      }
    );
  }

  search() {}
}
