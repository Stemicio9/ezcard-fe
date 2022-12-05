import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParamsOptions} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }




  downloadFileFromUrl(url: string){
    return this.httpClient.post(environment.base_url + "protected/profile/get/file" ,{"fileLink" : url}, {responseType: 'arraybuffer'});
  }


}
