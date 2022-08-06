import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Resume } from 'src/app/models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  baseUrl = `${environment.baseUrl}/resume`;

  constructor(private http: HttpClient) { }


  GetResume() {
  // now returns an Observable of Config
  return this.http.get<Resume[]>(this.baseUrl);
}

}
