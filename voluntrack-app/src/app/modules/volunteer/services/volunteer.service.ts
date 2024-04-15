import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../components/volunteer-dash/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>('')
  }
}
