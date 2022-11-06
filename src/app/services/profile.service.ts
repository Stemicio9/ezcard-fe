import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../entities/profile";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  insertProfile(profile: Profile){
    return this.httpClient.post(environment.base_url + 'profile/insert', profile);
  }

  updateProfile(profile: Profile){
    return this.httpClient.put(environment.base_url + 'profile/update', profile);
  }

  insertUser(username: string, password: string){
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post(environment.base_url + 'profile/create', body);
  }

  getProfile(username: string){
    return this.httpClient.get(environment.base_url + 'profile/get/' + username);
  }
}
