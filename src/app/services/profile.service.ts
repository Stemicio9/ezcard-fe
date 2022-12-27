import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../entities/profile";
import {environment} from "../../environments/environment";
import {StorageService} from "./storage.service";
import {ProfileContainer} from "../entities/profile-container";
import {ContactContainer} from "../entities/contact-container";
import {SocialContainer} from "../entities/social-container";
import {CompanyContainer} from "../entities/company-container";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  base_path = environment.base_url + 'protected/profile/';
  public_base_path = environment.base_url + 'public/profile/';

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  buildHeaders(){
    return {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.storageService.getTokenFromStorage()
    };
  }

  insertProfile(profile: Profile){
    const headers = this.buildHeaders();
    return this.httpClient.post(this.base_path + 'insert', profile, {headers: headers});
  }

  insertUser(username: string, password: string){
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post(this.base_path + 'create', body, {headers: this.buildHeaders()});
  }

  updateProfile(profile: ProfileContainer){
    return this.httpClient.post(this.base_path + 'update/profile', profile, {headers: this.buildHeaders()});
  }

  updateSocial(social: SocialContainer[]){
    return this.httpClient.post(this.base_path + 'update/social', social, {headers: this.buildHeaders()});
  }

  updateContacts(contacts: ContactContainer[]){
    return this.httpClient.post(this.base_path + 'update/contacts', contacts, {headers: this.buildHeaders()});
  }

  updateCompany(companies: CompanyContainer[]){
    return this.httpClient.post(this.base_path + 'update/companies', companies, {headers: this.buildHeaders()});
  }

  updateMedia(fileList: any[], type: string){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i].file);
    }
    const params = {type: type};
    return this.httpClient.post(this.base_path + 'update/media', formData, {reportProgress: true, responseType: 'json', params: params});

  }


  getProfile(){
    return this.httpClient.get(this.base_path + 'get/profile', {headers: this.buildHeaders()});
  }

  getSocial(){
    return this.httpClient.get(this.base_path + 'get/social', {headers: this.buildHeaders()});
  }

  getContacts(){
    return this.httpClient.get(this.base_path + 'get/contacts', {headers: this.buildHeaders()});
  }

  getCompany(){
    return this.httpClient.get(this.base_path + 'get/companies', {headers: this.buildHeaders()});
  }

  getMedia(type: string){
    return this.httpClient.get(this.base_path + 'get/media/', {headers: this.buildHeaders(), params: {'type': type}});
  }

  getProfileShown(id: string){
    return this.httpClient.get(this.public_base_path + 'get/profile-shown/'+ id, {headers: this.buildHeaders()});
  }

  changeUserStatus(id: string) {
    return this.httpClient.get(this.base_path + 'change-user-status/' + id, {headers: this.buildHeaders()});
  }


}
