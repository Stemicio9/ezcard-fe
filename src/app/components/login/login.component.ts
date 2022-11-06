import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    const { username, password } = this.form;
    console.log(username);
    console.log(password);

    this.authService.authenticateUser(username, password).subscribe(
      (body: any) => {
        this.storageService.saveTokenInStorage(body['token']);
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
