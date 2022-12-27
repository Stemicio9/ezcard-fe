import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  disableButton = true;

  confirmPasswordClass = 'form-control';
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);

  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  resetPassword() {
    if (!this.resetPasswordForm?.valid) {
      return;
    } else {
      this.router.navigate(['home']);
    }

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

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        this.disableButton = true;
        return;
      }
      if (control.value !== matchingControl.value) {
        this.disableButton = true;
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        this.disableButton = false;
        matchingControl.setErrors(null);
      }
    };
  }

}
