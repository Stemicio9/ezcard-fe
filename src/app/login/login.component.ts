import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private storageService: StorageService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.authService.authenticateUser(this.username, this.password).subscribe(
      (body:any) => {
        this.storageService.saveTokenInStorage(body['token']);
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
