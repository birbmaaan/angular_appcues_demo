import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchpadService {
  constructor(
    private http: HttpClient
  ) { }


  fetchResults(account: string, user: string, url: string): Observable<any> {
    return this.http.get<any>(`https://api.appcues.com/v1/accounts/${account}/users/${user}/launchpad?url=${url}`);
  }
  
}