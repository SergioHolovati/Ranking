import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Player } from 'src/app/models/player.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl = `${environment.baseUrl}/players`;

  constructor(private http: HttpClient) { }


  GetPlayers() {
    // now returns an Observable of Config
    return this.http.get<Player[]>(this.baseUrl);
  }

  delete(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  edit(id:number, object:any){
    return this.http.put(this.baseUrl+"/"+id, object);
  }

  create(body:any){
    return this.http.post(this.baseUrl, body).pipe(
 
      catchError(this.handleError)
 
    );
 ;
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
