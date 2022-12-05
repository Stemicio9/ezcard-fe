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
    return this.httpClient.post(this.base_path + 'update/company', companies, {headers: this.buildHeaders()});
  }

  updatePresentation(presentation: any){
    return this.httpClient.post(this.base_path + 'update/presentation', presentation);
  }

  updateGallery(gallery: any){
    return this.httpClient.post(this.base_path + 'update/gallery', gallery);
  }

  updatePartner(partner: any){
    return this.httpClient.post(this.base_path + 'update/partner', partner);
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
    return this.httpClient.get(this.base_path + 'get/company', {headers: this.buildHeaders()});
  }

  getPresentation(){
    return this.httpClient.get(this.base_path + 'get/presentation', {headers: this.buildHeaders()});
  }

  getGallery(){
    return this.httpClient.get(this.base_path + 'get/gallery', {headers: this.buildHeaders()});
  }

  getPartner(){
    return this.httpClient.get(this.base_path + 'get/pertner', {headers: this.buildHeaders()});
  }

}
