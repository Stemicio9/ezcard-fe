import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  // Authenticate the user
  authenticateUser(username:string, password:string){
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post(environment.base_url, body) ;
  }


}
