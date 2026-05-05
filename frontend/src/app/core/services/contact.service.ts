import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactRequest {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);
  private formspreeUrl = environment.formspreeUrl;

  submitContact(data: ContactRequest): Observable<any> {
    // Formspree accepts direct POST requests with JSON payload
    return this.http.post(this.formspreeUrl, data);
  }
}
