import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Organization } from './organization';
import { HttpClient } from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private apiUrl = 'http://localhost:8080/voluntrack/organization';

  constructor(private http: HttpClient) {}

  data = new BehaviorSubject<any>({
    data: null,
  });

  dataListener = this.data.asObservable();

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

  pushData(organization: Organization) {
    this.data.next(organization);
  }

  // Method to call the backend login route
  login(credentials: { userName: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
