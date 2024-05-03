import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from './volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private apiUrl = 'http://localhost:8080/voluntrack/volunteers'

  constructor(private http: HttpClient) { }

  getVolunteerById(volunteerID: number): Observable<Volunteer> {
    const url = `${this.apiUrl}/${volunteerID}`;
    return this.http.get<Volunteer>(url);
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(this.apiUrl);
  }

  addVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.post<Volunteer>(this.apiUrl, volunteer);
  }
  
}
