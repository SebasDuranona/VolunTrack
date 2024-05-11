import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Volunteer } from './volunteer';

@Injectable({
  providedIn: 'root',
})
export class VolunteerService {
  private apiUrl = 'http://localhost:8080/voluntrack/volunteer';

  constructor(private http: HttpClient) {}

  data = new BehaviorSubject<any>({
    data: null,
  });

  dataListener = this.data.asObservable();

  getVolunteerById(volunteerID: number): Observable<Volunteer> {
    const url = `${this.apiUrl}/${volunteerID}`;
    return this.http.get<Volunteer>(url);
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(this.apiUrl);
  }

  addVolunteer(volunteer: Volunteer[]): Observable<Volunteer> {
    return this.http.post<Volunteer>(this.apiUrl, volunteer);
  }

  pushData(volunteer: Volunteer) {
    this.data.next(volunteer);
  }

  // Method to call the backend login route
  login(credentials: { userName: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
