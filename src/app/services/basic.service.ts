import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  PASSWORD: string = 'tech_xpr';

  apiKey = '204669d2';

  baseUrl = "http://www.omdbapi.com/"

  constructor(
    private http: HttpClient,
  ) { }

  getData(query: string): any {
    return this.http.get(this.baseUrl,{
      params: {
        apiKey: this.apiKey,
        s: query
      }
    })
  }

}
