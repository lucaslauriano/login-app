import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NavComponent} from './Nav/Nav.component';
import {LoginComponent} from './login/login.component';
import { UsersComponent } from './users/users.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, 
        MatMenuModule, 
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule
  }
from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
