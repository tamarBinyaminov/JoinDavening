import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAndLoginComponent } from './components/register-and-login/register-and-login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { MinyanimComponent } from './components/minyanim/minyanim.component';

const appRoutes: Routes = [
  { path: 'RegisterAndLogin', component: RegisterAndLoginComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'Home',component:HomeComponent
  
    // ,data: { title: 'Heroes List' }
  },
  
  // { path: '**', component: PageNotFoundComponent }
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'minyanim',component:MinyanimComponent
  },
  {
    path: '',redirectTo: '/Home',pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
