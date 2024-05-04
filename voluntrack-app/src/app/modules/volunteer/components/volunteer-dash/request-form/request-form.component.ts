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
import { map } from 'rxjs';
import {VolunteerService} from "../../../services/volunteer/volunteer.service";
import { RequestService } from '../../../services/requests/request.service';
import { Request } from '../../../services/requests/request';
import { OrganizationService } from '../../../services/organization/organization.service';
import { SelectItem } from 'primeng/api';
import { Organization } from '../../../services/organization/organization';
import { HttpClient } from '@angular/common/http';

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
  styleUrl: './request-form.component.scss'
})
export class RequestFormComponent {

  private apiUrl = 'http://localhost:8080/voluntrack/organizations';

  requestForm: FormGroup;
  organizations: Organization[] = [];
  organizationNames: string[] = [];

  selectedOrg: any;


  displayModal:boolean = false;

  constructor(private fb: FormBuilder, private requestService: RequestService, private organizationService: OrganizationService, private http: HttpClient) {
    this.requestForm = this.fb.group({
      org: [''],
      date: [''],
      info: [''],
      hours: [''],
    })
  }

  ngOnInit(): void {

    this.organizationService.getOrganizations().subscribe(
      (organizations: Organization[] | any) => {
        console.log(organizations);
        if (Array.isArray(organizations.data)) {
          this.organizations = organizations.data;
          // this.organizationNames = organizations.map(org => org.name);
        } else {
          console.error('Unexpected response format:', organizations);
        }
      },
      (error) => {
        console.error('Error fetching organizations:', error);
      }
    );

    for (var org in this.organizations) {
      this.organizationNames.push(org)
    }
  }

  onSubmit() {

  }
}
