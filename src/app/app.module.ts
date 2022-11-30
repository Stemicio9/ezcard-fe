import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {NgbDateParserFormatterExtProvider} from "./components/date-picker";
import { SettingsComponent } from './components/settings/settings.component';
import { StatsComponent } from './components/stats/stats.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PresentationModalComponent } from './components/modal/presentation-modal/presentation-modal.component';
import { GalleryModalComponent } from './components/modal/gallery-modal/gallery-modal.component';
import { PartnerModalComponent } from './components/modal/partner-modal/partner-modal.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { ProfileDarkComponent } from './components/profile-dark/profile-dark.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChangeImageModalComponent } from './components/modal/change-image-modal/change-image-modal.component';




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
    SettingsComponent,
    StatsComponent,
    ResetPasswordComponent,
    PresentationModalComponent,
    GalleryModalComponent,
    PartnerModalComponent,
    DropZoneDirective,
    ProfileDarkComponent,
    ChangeImageModalComponent,

  ],
  imports: [
    AppRoutingModule,
    CarouselModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxLegendModule,
    IgxCategoryChartModule,
    BrowserAnimationsModule,

  ],
  providers: [
    NgbDateParserFormatterExtProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
