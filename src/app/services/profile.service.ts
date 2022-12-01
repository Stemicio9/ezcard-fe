import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }



  buildHeaders(){
    const headers = new HttpHeaders().set('X-Auth', this.storageService.getTokenFromStorage() ?? "");
    headers.set( 'Content-Type', 'application/json');
    return headers;
  }


  listUser(){
    return this.httpClient.get(environment.base_url + 'protected/list', {headers: this.buildHeaders()});
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


  updateGallery(fileList: File[]){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }
    return this.httpClient.post(environment.base_url + 'protected/profile/update/gallery', formData, {headers: this.buildHeaders()});
  }

  updatePresentation(fileList: File[]){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }
    return this.httpClient.post(environment.base_url + 'protected/profile/update/presentation', formData, {headers: this.buildHeaders()});
  }

  updatePartner(fileList: File[]){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }
    return this.httpClient.post(environment.base_url + 'protected/profile/update/partner', formData, {headers: this.buildHeaders()});
  }

  getPresentation(){
    return this.httpClient.get(environment.base_url + 'protected/profile/get/presentation', {headers: this.buildHeaders()});
  }

  getGallery(){
    return this.httpClient.get(environment.base_url + 'protected/profile/get/gallery', {headers: this.buildHeaders()});
  }

  getPartner(){
    return this.httpClient.get(environment.base_url + 'protected/profile/get/pertner', {headers: this.buildHeaders()});
  }


  updateProfile(profile: ProfileContainer){
    return this.httpClient.post(environment.base_url + 'profile/update/profile', profile, {headers: this.buildHeaders()});
  }

  updateSocial(social: SocialContainer[]){
    return this.httpClient.post(environment.base_url + 'profile/update/social', social, {headers: this.buildHeaders()});
  }

  updateContacts(contacts: ContactContainer[]){
    return this.httpClient.post(environment.base_url + 'profile/update/contacts', contacts, {headers: this.buildHeaders()});
  }

  updateCompany(companies: CompanyContainer[]){
    return this.httpClient.post(environment.base_url + 'profile/update/company', companies, {headers: this.buildHeaders()});
  }






  getCurrentProfile(){
    return this.httpClient.get(environment.base_url + 'profile/get/profile', {headers: this.buildHeaders()});
  }

  getProfile(username: string){
    return this.httpClient.get(environment.base_url + 'profile/get/' + username, {headers: this.buildHeaders()});
  }

  getSocial(){
    return this.httpClient.get(environment.base_url + 'profile/get/social', {headers: this.buildHeaders()});
  }

  getContacts(){
    return this.httpClient.get(environment.base_url + 'profile/get/contacts', {headers: this.buildHeaders()});
  }

  getCompany(){
    return this.httpClient.get(environment.base_url + 'profile/get/company', {headers: this.buildHeaders()});
  }



}
