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



  buildHeaders(){
    const headers = new HttpHeaders().set('X-Auth', this.storageService.getTokenFromStorage() ?? "");
    headers.set( 'Content-Type', 'application/json');
    return headers;
  }


  downloadFileFromUrl(url: string) : Observable<ArrayBuffer>{
    console.log("URL ATTUALE");
    console.log(url);
    var options = {
      headers: this.buildHeaders(),
      responseType: 'arraybuffer'
    }
    return this.httpClient.post<ArrayBuffer>(environment.base_url + "protected/profile/get/file" ,{"fileLink" : url}, {headers: this.buildHeaders(), responseType: 'arraybuffer' as 'json'});
  }



}
