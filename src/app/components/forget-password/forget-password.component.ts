import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  form: any = {
    email: null,
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  forgetPassword() {
    this.authService.forgotPassword(this.form.email).subscribe(
      (data) => {

      });
    //todo display something to the user
    this.router.navigate(['/login']);
  }
}
