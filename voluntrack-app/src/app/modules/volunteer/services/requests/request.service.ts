import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl = 'http://localhost:8080/voluntrack/requests'

  constructor(private http: HttpClient) { }

  getRequestById(requestID: number): Observable<Request> {
    const url = `${this.apiUrl}/${requestID}`;
    return this.http.get<Request>(url);
  }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }

  addRequest(request: Request[]): Observable<Request> {
    return this.http.post<Request>(this.apiUrl, request);
  }
}
