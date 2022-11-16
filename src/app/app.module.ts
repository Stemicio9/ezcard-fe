import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {HomeRowComponent} from './components/home-row/home-row.component';
import {ProfileModalComponent} from './components/modal/profile-modal/profile-modal.component';
import {SocialModalComponent} from './components/modal/social-modal/social-modal.component';
import {ContactsModalComponent} from './components/modal/contacts-modal/contacts-modal.component';
import {CompanyModalComponent} from './components/modal/company-modal/company-modal.component';
import {PasswordModalComponent} from './components/modal/password-modal/password-modal.component';
import {NgbDateParserFormatterExtProvider} from "./components/date-picker";
import { SettingsComponent } from './components/settings/settings.component';
import { StatsComponent } from './components/stats/stats.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    ForgetPasswordComponent,
    HomeRowComponent,
    ProfileModalComponent,
    ContactsModalComponent,
    SocialModalComponent,
    CompanyModalComponent,
    PasswordModalComponent,
    SettingsComponent,
    StatsComponent,
    ResetPasswordComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NgbDateParserFormatterExtProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
