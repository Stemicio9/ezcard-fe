import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {HomeRowComponent} from './components/home-row/home-row.component';
import {ProfileModalComponent} from './modal/profile-modal/profile-modal.component';
import {SocialModalComponent} from './modal/social-modal/social-modal.component';
import {ContactsModalComponent} from './modal/contacts-modal/contacts-modal.component';
import {CompanyModalComponent} from './modal/company-modal/company-modal.component';
import {NgbDateParserFormatterExtProvider} from "./components/date-picker";
import {SettingsComponent} from './components/settings/settings.component';
import {StatsComponent} from './components/stats/stats.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {PresentationModalComponent} from './modal/presentation-modal/presentation-modal.component';
import {GalleryModalComponent} from './modal/gallery-modal/gallery-modal.component';
import {PartnerModalComponent} from './modal/partner-modal/partner-modal.component';
import {DropZoneDirective} from './directives/drop-zone.directive';
import {IgxCategoryChartModule, IgxLegendModule} from 'igniteui-angular-charts';
import {ProfileDarkComponent} from './components/profile-dark/profile-dark.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ChangeImageModalComponent} from './modal/change-image-modal/change-image-modal.component';
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {HttpRequestInterceptor} from "./interceptors/http-request.interceptor";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  ProfileContainerCompanyComponent
} from './components/profile-container-company/profile-container-company.component';
import {
  ProfileContainerPresentationComponent
} from './components/profile-container-presentation/profile-container-presentation.component';
import {
  ProfileContainerGalleryComponent
} from './components/profile-container-gallery/profile-container-gallery.component';
import { ProfileContainerPartnerComponent } from './components/profile-container-partner/profile-container-partner.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { DisableUserModalComponent } from './modal/disable-user-modal/disable-user-modal.component';
import { ModifyUserModalComponent } from './modal/modify-user-modal/modify-user-modal.component';
import { CreateUserModalComponent } from './modal/create-user-modal/create-user-modal.component';
import { QrcodeGeneratorModalComponent } from './modal/qrcode-generator-modal/qrcode-generator-modal.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgxVcardModule} from "ngx-vcard";

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
    ProfileContainerCompanyComponent,
    ProfileContainerPresentationComponent,
    ProfileContainerGalleryComponent,
    ProfileContainerPartnerComponent,
    AdministratorComponent,
    DisableUserModalComponent,
    ModifyUserModalComponent,
    CreateUserModalComponent,
    QrcodeGeneratorModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxVcardModule,
    CarouselModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxLegendModule,
    IgxCategoryChartModule,
  ],
  providers: [
    NgbDateParserFormatterExtProvider,
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
