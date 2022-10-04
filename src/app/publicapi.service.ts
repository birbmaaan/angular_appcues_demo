import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInfo } from './interfaces/api-info';
import { Parameters } from './interfaces/parameters';

@Injectable({
  providedIn: 'root'
})
export class PublicapiService {

  constructor(
    private http: HttpClient
  ) { }

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
    
    return this.http.get<any>(url, httpOptions)
  }

  makeBulk(info: ApiInfo, params: Parameters): string {
    var url = `https://api.appcues.com/v2/accounts/${info.account}/export/events`;
    const token = Buffer.from(`${info.key}:${info.secret}`).toString('base64');

    var httpOptions = {
      headers: new HttpHeaders({
      'Authorization': `Basic ${token}`,
      'content-type': 'application/json'
      })
    }

    console.log('posting request')
    this.http.post<any>(url, params, httpOptions)
      .subscribe(response => console.log(response));
    return "data requested. Check your email!";
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
