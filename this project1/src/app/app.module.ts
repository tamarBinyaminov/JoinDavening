import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAndLoginComponent } from './components/register-and-login/register-and-login.component';
import { RegisterComponent } from './components/register/register.component';

import{FormsModule}from '@angular/forms';
import { MinyanimComponent } from './components/minyanim/minyanim.component';
import{MatDialogModule}from'@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    RegisterAndLoginComponent,

    MinyanimComponent,
    
    
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule, //MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
