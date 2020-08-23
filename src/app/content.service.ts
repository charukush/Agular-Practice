import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http : HttpClient) { }

  public async getcontentList(){
      return this.http.get("http://localhost:3000/dev/content").toPromise();
  }

}
