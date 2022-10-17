import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiInfo } from './interfaces/api-info';
import { Parameters } from './interfaces/parameters';

@Injectable({
  providedIn: 'root'
})
export class PublicapiService {

  constructor(
    private http: HttpClient
  ) { }

  makeRequest(info: ApiInfo, params: Parameters): Observable<any> {
    if (info.bulk === true) {
      return this.makeBulk(info, params)
    } else {
      return this.get(info)
    }
  }

  get(info: ApiInfo): Observable<any> {
  
    const token = Buffer.from(`${info.key}:${info.secret}`).toString('base64');
    var url = "";

    var httpOptions = { 
      headers: new HttpHeaders({
        'Authorization': `Basic ${token}`
      })
    }

    if (this.isPlural(info.content)) {
      url = `https://api.appcues.com/v2/accounts/${info.account}/${info.content}`;
    } else if (info.content === "user") {
      url = `https://api.appcues.com/v2/accounts/${info.account}/${info.content}s/${info.content_id}/profile`
    } else {
      url = `https://api.appcues.com/v2/accounts/${info.account}/${info.content}s/${info.content_id}`
    }
    
    console.log(`making a request for the ${info.content}`)
    return this.http.get<any>(url, httpOptions)
  }

  makeBulk(info: ApiInfo, params: Parameters): Observable<any> {
    var url = `https://api.appcues.com/v2/accounts/${info.account}/export/events`;
    const token = Buffer.from(`${info.key}:${info.secret}`).toString('base64');

    var httpOptions = {
      headers: new HttpHeaders({
      'Authorization': `Basic ${token}`,
      'content-type': 'application/json'
      })
    }

    return this.http.post<any>(url, params, httpOptions)
  }

  isPlural(content: string): boolean {
    if (content === "flows") {
      return true;
    } else if (content === "segments") {
      return true;
    } else if (content === "users") {
      return true;
    } else if (content === "jobs") {
      return true;
    }

    return false;
  }

}
