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





  listUser(){
    return this.httpClient.get(environment.base_url + 'protected/list');
  }

  insertProfile(profile: Profile){
    return this.httpClient.post(environment.base_url + 'profile/insert', profile);
  }

  insertUser(username: string, password: string){
    const body = {
      "username": username,
      "password": password
    };
    return this.httpClient.post(environment.base_url + 'profile/create', body);
  }


  updateGallery(fileList: File[]){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }

    return this.httpClient.post(environment.base_url + 'protected/profile/update/gallery', formData);
  }

  updatePresentation(fileList: File[]){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }
    return this.httpClient.post(environment.base_url + 'protected/profile/update/presentation', formData);
  }

  updatePartner(fileList: File[]){
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }
    return this.httpClient.post(environment.base_url + 'protected/profile/update/partner', formData);
  }

  getPresentation(){
    return this.httpClient.get(environment.base_url + 'protected/profile/get/presentation');
  }

  getGallery(){
    return this.httpClient.get(environment.base_url + 'protected/profile/get/gallery');
  }

  getPartner(){
    return this.httpClient.get(environment.base_url + 'protected/profile/get/pertner');
  }


  updateProfile(profile: ProfileContainer){
    return this.httpClient.post(environment.base_url + 'profile/update/profile', profile);
  }

  updateSocial(social: SocialContainer[]){
    return this.httpClient.post(environment.base_url + 'profile/update/social', social);
  }

  updateContacts(contacts: ContactContainer[]){
    return this.httpClient.post(environment.base_url + 'profile/update/contacts', contacts);
  }

  updateCompany(companies: CompanyContainer[]){
    return this.httpClient.post(environment.base_url + 'profile/update/company', companies);
  }






  getCurrentProfile(){
    return this.httpClient.get(environment.base_url + 'profile/get/profile');
  }

  getProfile(username: string){
    return this.httpClient.get(environment.base_url + 'profile/get/' + username);
  }

  getSocial(){
    return this.httpClient.get(environment.base_url + 'profile/get/social');
  }

  getContacts(){
    return this.httpClient.get(environment.base_url + 'profile/get/contacts');
  }

  getCompany(){
    return this.httpClient.get(environment.base_url + 'profile/get/company');
  }



}
