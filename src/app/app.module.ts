import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Persistencia LocalStorage */
import {PersistenceProvider} from './common/persistence/persistence.component';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

/* App */
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

/* Service */
import {MessageService} from './common/message/message.service';
import {AuthGuard} from './common/auth/auth.guard';
import {AuthService} from './common/auth/auth.service';
import {UserService} from './users/user/user.service';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
        MatToolbarModule, 
        MatMenuModule, 
        MatSnackBarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCheckboxModule
  }
from '@angular/material';

import { MessageComponent } from './common/message/message.component';
import { NavComponent } from './Nav/Nav.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './users/user-new/user-new.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserPipe } from './users/user/user.pipe';
import { EqualValidator } from './common/validator/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EqualValidator,
    UserNewComponent,
    UsersComponent,
    UserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
    /* Material 2 */
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers : [
    PersistenceProvider,
    MockBackend, 
    BaseRequestOptions,
    MessageService,
    AuthService,
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
