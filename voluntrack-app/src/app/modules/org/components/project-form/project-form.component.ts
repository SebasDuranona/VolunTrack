import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Project } from '../../../volunteer/services/projects/project';
import { ProjectService } from '../../../volunteer/services/projects/project.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { OrganizationService } from '../../../volunteer/services/organization/organization.service';
import { Organization } from '../../../volunteer/services/organization/organization';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent {
  projectForm: FormGroup;
  organizations: Organization[] = [];

  // init the form
  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private organizationService: OrganizationService
  ) {
    this.projectForm = this.fb.group({
      projectId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      hours: ['', Validators.required],
      organizationId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // get a list of all the organizations
    this.organizationService.getOrganizations().subscribe(
      (response: Organization[] | any) => {
        console.log(response);
        if (Array.isArray(response.data)) {
          this.organizations = response.data;
        } else {
          console.error('Unexpected response format: ', response);
        }
      },
      (error) => {
        console.error('Error fetching organizations:', error);
      }
    );
  }

  // add the request to the database
  onSubmit() {
    if (this.projectForm.valid) {
      const newProject: Project = this.projectForm.value;
      console.log('Form Values:', this.projectForm.value);

      this.projectService.addProject([newProject]).subscribe(
        (response: Project) => {
          console.log('Project added successfully: ', response);
          this.projectForm.reset();
        },
        (error) => {
          console.error('Error adding Project:', error);
        }
      );
    }
  }
}
