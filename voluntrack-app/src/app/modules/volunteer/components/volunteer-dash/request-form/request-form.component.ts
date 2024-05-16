import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { map } from 'rxjs';
import { VolunteerService } from '../../../services/volunteer/volunteer.service';
import { RequestService } from '../../../services/requests/request.service';
import { Request } from '../../../services/requests/request';
import { OrganizationService } from '../../../services/organization/organization.service';
import { SelectItem } from 'primeng/api';
import { Organization } from '../../../services/organization/organization';
import { HttpClient } from '@angular/common/http';
import { Volunteer } from '../../../services/volunteer/volunteer';
import { ProjectService } from '../../../services/projects/project.service';
import { Project } from '../../../services/projects/project';

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
    DialogModule,
  ],
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.scss',
})
export class RequestFormComponent {
  private apiUrl = 'http://localhost:8080/voluntrack/organizations';

  requestForm: FormGroup;
  organizations: Organization[] = [];
  organizationNames: string[] = [];
  projects: Project[] = [];

  selectedProject: any;
  currentProj!: Project;

  displayModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private projectService: ProjectService,
    private organizationService: OrganizationService,
    private http: HttpClient
  ) {
    this.requestForm = this.fb.group({
      requestInfo: ['', Validators.required],
      hours: ['', Validators.required],
      approved: [false, Validators.required],
      volunteerId: ['', Validators.required],
      projectId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // get a list of all the projects
    this.projectService.getProjects().subscribe(
      (response: Project[] | any) => {
        console.log(response);
        if (Array.isArray(response.data)) {
          this.projects = response.data;
        } else {
          console.error('Unexpected response format: ', response);
        }
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );

    // load organizations for dropdown
    this.organizationService.getOrganizations().subscribe(
      (response: Organization[] | any) => {
        console.log(response);
        if (Array.isArray(response.data)) {
          this.organizations = response.data;
          this.organizationNames = response.data.map(
            (org: Organization) => org.name
          );
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      (error) => {
        console.error('Error fetching organizations:', error);
      }
    );
  }

  // add the request to the database
  onSubmit() {
    console.log('submit');
    console.log('current project:', this.currentProj);

    if (this.requestForm.valid) {
      const newRequest: Request = this.requestForm.value;
      console.log('Form Values:', this.requestForm.value);

      this.requestService.addRequest([newRequest]).subscribe(
        (response: Request) => {
          console.log('Request added successfully: ', response);
          this.requestForm.reset();
        },
        (error) => {
          console.error('Error adding Request:', error);
        }
      );
    }
  }
}
