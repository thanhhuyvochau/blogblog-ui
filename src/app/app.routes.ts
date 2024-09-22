import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
