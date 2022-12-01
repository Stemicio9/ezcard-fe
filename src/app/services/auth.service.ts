import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }


  // Authenticate the user
  authenticateUser(username:string, password:string){
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post(environment.base_url+'public/login', body, {observe: 'response'}) ;
  }

  listUser(){
    let t = this.storageService.getTokenFromStorage();
    const headers= new HttpHeaders().set('X-Auth', t ? t : "");
    return this.httpClient.get(environment.base_url+'protected/list', {headers: headers});
  }


}
