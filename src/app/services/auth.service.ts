import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public base_path = environment.base_url;

  constructor(private _http: HttpClient) {
  }

  // Authenticate the user
  authenticateUser(username: string, password: string) {
    const body = {
      "username": username,
      "password": password
    };
    return this._http.post(this.base_path + 'public/login', body, {observe: 'response'});
  }

  listAllUsers(): Observable<any> {
    return this._http.get<any>(this.base_path + 'protected/list');
  }

  updateUser(user: any): Observable<any> {
    return this._http.post<any>(this.base_path + 'protected/update-admin', user);
  }

  createUser(user: any) {
    return this._http.post<any>(this.base_path + 'protected/create-user', user);
  }

  generateQRCode(username: any): Observable<any> {
    let a = {responseType: 'arraybuffer' as 'json'};
    return this._http.get<any>(this.base_path + 'protected/qrcode/' + username, a);
  }
}
