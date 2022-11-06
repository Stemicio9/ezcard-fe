import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../entities/profile";
import {environment} from "../../environments/environment";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }



  buildHeaders(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getTokenFromStorage()
    };
    return headers;
  }

  insertProfile(profile: Profile){
    const headers = this.buildHeaders();
    return this.httpClient.post(environment.base_url + 'profile/insert', profile, {headers: headers});
  }

  updateProfile(profile: Profile){
    return this.httpClient.put(environment.base_url + 'profile/update', profile, {headers: this.buildHeaders()});
  }

  insertUser(username: string, password: string){
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post(environment.base_url + 'profile/create', body, {headers: this.buildHeaders()});
  }

  getProfile(username: string){
    return this.httpClient.get(environment.base_url + 'profile/get/' + username);
  }
}
