import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../entities/profile";
import {environment} from "../../environments/environment";
import {StorageService} from "./storage.service";
import {ProfileContainer} from "../entities/profile-container";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }



  buildHeaders(){
    return {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getTokenFromStorage()
    };
  }

  insertProfile(profile: Profile){
    const headers = this.buildHeaders();
    return this.httpClient.post(environment.base_url + 'profile/insert', profile, {headers: headers});
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


  updateProfile(profile: ProfileContainer){
    return this.httpClient.put(environment.base_url + 'profile/update/profile', profile, {headers: this.buildHeaders()});
  }

  uodateSocial(social: any){
    return this.httpClient.post(environment.base_url + 'profile/update/social', social);
  }

  updateContacts(contacts: any){
    return this.httpClient.post(environment.base_url + 'profile/update/contacts', contacts);
  }

  updateAzienda(azienda: any){
    return this.httpClient.post(environment.base_url + 'profile/update/company', azienda);
  }

  uodatePresentation(presentation: any){
    return this.httpClient.post(environment.base_url + 'profile/update/presentation', presentation);
  }

  uodateGallery(gallery: any){
    return this.httpClient.post(environment.base_url + 'profile/update/gallery', gallery);
  }

  uodatePartner(partner: any){
    return this.httpClient.post(environment.base_url + 'profile/update/pertner', partner);
  }

}
