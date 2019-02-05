import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = ("")

  constructor(private http: HttpClient) { }
  // getLogindetails(){
  //   return this.http.get<User[]>(this.loginUrl);
  // }
}
