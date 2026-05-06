import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // Formspree requires specific headers to accept ajax submission directly
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    return this.http.post(this.formspreeUrl, data, { headers });
  }
}
