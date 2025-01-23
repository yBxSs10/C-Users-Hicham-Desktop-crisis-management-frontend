import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignalementFormComponent } from './signalement-form/signalement-form.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'signalement', component: SignalementFormComponent },
  { path: 'actions', component: ActionsPageComponent },
  { path: 'compte-rendu', component: CompteRenduComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
