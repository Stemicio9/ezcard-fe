import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Cookie} from "ng2-cookies";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient){}

  // Authenticate the user
  authenticateUser(username:string, password:string){
    const body = {
      "username": username,
      "password": password
    };
    return this._http.post(environment.base_url+'public/login', body, {observe: 'response'});
  }



}
