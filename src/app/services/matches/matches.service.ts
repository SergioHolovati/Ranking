import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Matches } from 'src/app/models/matche.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  baseUrl = `${environment.baseUrl}/matches`;

  constructor(private http: HttpClient) { }


  GetMatches() {
    // now returns an Observable of Config
    return this.http.get<Matches[]>(this.baseUrl);
  }

  create(body : any){
    return this.http.post(this.baseUrl, body).pipe(
 
      catchError(this.handleError)
 
    ); 
  }



  handleError(error:any) {

 
    if (error.status == 200) {
 
      // client-side error
      return error.message;
 
    } else {
 
      // server-side error
      return error.message

    }
 
 }
}
