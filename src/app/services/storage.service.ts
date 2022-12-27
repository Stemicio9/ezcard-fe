import {Injectable} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  extractRoleFromToken(){
    const helper = new JwtHelperService();
    const token = this.getTokenFromStorage();
    if(token != null) {
      const decodedToken = helper.decodeToken(token);
      return decodedToken.roles;
    }
    return [];
  }

  isAdmin() {
    const roles = this.extractRoleFromToken();
    return roles.includes('ROLE_ADMIN');
  }
}
