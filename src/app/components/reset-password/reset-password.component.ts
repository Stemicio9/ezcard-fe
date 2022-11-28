import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: any = {
    password: null,
    confirmPassword: null,
  };

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resetPassword() {
    this.router.navigate(['home']);

    /*const { email, password } = this.form;

    this.authService.authenticateUser(email, password).subscribe(
      (body: any) => {
        this.storageService.saveTokenInStorage(body['token']);
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
      }
    );*/
  }

}
