import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicapiService {

  constructor(
    private http: HttpClient
  ) { }

  get(
    key: string, 
    secret: string, 
    account: string, 
    content: string, 
    content_id: string,
    conditions: string
    ): Observable<any> {
  
    const token = Buffer.from(`${key}:${secret}`).toString('base64');
    var url = "";

    const httpOptions = { 
      headers: new HttpHeaders({
        'Authorization': `Basic ${token}`
      }),
      params: new HttpParams({
      })
    }

    if (conditions !== "") {
      url = `https://api.appcues.com/v2/accounts/${account}/export/events`;
      httpOptions.headers.set('content-type', 'application/json');
      httpOptions.params.append("email", "elijah@appcues.com");
      httpOptions.params.append("format", "csv");
      httpOptions.params.append("conditions", '[]');
      httpOptions.params.append("start_time", '2022-09-29');

    } else if (this.isPlural(content)) {
      url = `https://api.appcues.com/v2/accounts/${account}/${content}`;
    } else if (content === "user") {
      url = `https://api.appcues.com/v2/accounts/${account}/${content}s/${content_id}/profile`
    } else {
      url = `https://api.appcues.com/v2/accounts/${account}/${content}s/${content_id}`
    }


    return this.http.get<any>(url, httpOptions)
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
