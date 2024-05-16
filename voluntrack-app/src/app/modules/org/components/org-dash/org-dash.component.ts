import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { Volunteer } from '../../../volunteer/services/volunteer/volunteer';
import { Request } from '../../../volunteer/services/requests/request';
import { Project } from '../../../volunteer/services/projects/project';
import { VolunteerService } from '../../../volunteer/services/volunteer/volunteer.service';
import { ProjectService } from '../../../volunteer/services/projects/project.service';
import { RequestService } from '../../../volunteer/services/requests/request.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Organization } from '../../../volunteer/services/organization/organization';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-org-dash',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    TagModule,
    CommonModule,
    ProjectFormComponent,
  ],
  providers: [MessageService],
  templateUrl: './org-dash.component.html',
  styleUrl: './org-dash.component.scss',
})
export class OrgDashComponent {
  requests: Request[] = [];
  cols: any[] = [];

  // current organization
  organization: Organization;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private projectService: ProjectService,
    private router: Router,
    private volunteerService: VolunteerService,
    private requestService: RequestService,
    private messageService: MessageService
  ) {
    // Retrieve the state passed via router
    const navigation = this.router.getCurrentNavigation();
    this.organization = navigation?.extras.state as Organization;
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'requestInfo', header: 'Request Info' },
      { field: 'hours', header: 'Hours Requested' },
      { field: 'approved', header: 'Status', customTemplate: true },
      { field: '', header: 'Approve' },
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

  approveRequest(request: any) {
    console.log(request);

    if (request && request.requestId) {
      this.requestService.approveRequest(true, request).subscribe({
        next: (response) => {
          if (response.responseStatus === 'SUCCESS') {
            this.messageService.add({
              severity: 'success',
              summary: 'Request Approved',
              detail: 'The request has been approved successfully.',
            });
            request.approved = true;
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Approval Failed',
              detail: response.errorMessage,
            });
          }
        },
        error: (error) => {
          console.error('Error approving request:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error occurred while approving the request.',
          });
        },
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Request',
        detail: 'The request data is incomplete.',
      });
    }
  }
}
