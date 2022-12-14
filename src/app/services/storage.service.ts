import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveTokenInStorage(token: string){
    localStorage.setItem('token', token);
  }

  getTokenFromStorage(){
    return localStorage.getItem('token');
  }

  removeTokenFromStorage(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }

}
