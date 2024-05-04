import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization';
import { HttpClient } from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private apiUrl = 'http://localhost:8080/voluntrack/organization'

  constructor(private http: HttpClient) { }

  getOrganizationByID(organizationID: number): Observable<Organization> {
    const url = `${this.apiUrl}/${organizationID}`;
    return this.http.get<Organization>(url);
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.apiUrl);
  }

  addOrganization(organization: Organization[]): Observable<Organization> {
    return this.http.post<Organization>(this.apiUrl, organization);
  }

 
}
