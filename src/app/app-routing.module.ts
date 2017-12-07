import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';
import { RoleGuard } from './common/auth/role.guard';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserNewComponent } from './user-new/user-new.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const APP_ROUTES : Routes = [
    { 
        path: '', 
        redirectTo: 'home', 
        canActivate: [AuthGuard],
        pathMatch: 'full'
    }, {
        path: 'home',
        /* canActivate: [AuthGuard], */
        component: HomeComponent
    }, {
        path: 'new-user',
       /*  canActivate: [AuthGuard], */
        component: UserNewComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {path: '**', component: HomeComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}