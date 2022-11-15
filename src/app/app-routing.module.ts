import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileModalComponent } from './components/modal/profile-modal/profile-modal.component';
import { ProfileComponent } from './components/profile/profile.component';
import {SettingsComponent} from "./components/settings/settings.component";
import {StatsComponent} from "./components/stats/stats.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileModalComponent },
  { path: 'settings', component:  SettingsComponent},

  { path: 'stats', component:  StatsComponent},
  { path: 'profile/:id', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
