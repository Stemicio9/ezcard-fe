import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileModalComponent} from './modal/profile-modal/profile-modal.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SettingsComponent} from "./components/settings/settings.component";
import {StatsComponent} from "./components/stats/stats.component";
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";
import {ProfileDarkComponent} from './components/profile-dark/profile-dark.component';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'home', component: HomeComponent , data: {title: 'Gestione Account'}, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileModalComponent, canActivate: [AuthGuard] },
  { path: 'settings', component:  SettingsComponent, data: {title: 'Impostazioni'}, canActivate: [AuthGuard]},
  { path: 'stats', component:  StatsComponent, data: {title: 'Statistiche'}, canActivate: [AuthGuard]},
  { path: 'profile/:id', component: ProfileComponent, data: {title: 'Profilo Utente'} },
  { path: 'profile-dark/:id', component: ProfileDarkComponent, data: {title: 'Profilo Utente Dark'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
