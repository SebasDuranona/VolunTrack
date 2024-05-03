import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private apiUrl = 'http://localhost:8080/voluntrack/projects'

  constructor(private http: HttpClient) { }

  getProjectByID(projectID: number): Observable<Project> {
    const url = `${this.apiUrl}/${projectID}`;
    return this.http.get<Project>(url);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }
}
