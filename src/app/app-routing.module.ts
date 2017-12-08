import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/auth/auth.guard';

import { AdminGuard } from './common/auth/admin.guard';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const appRoutes : Routes = [

    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'new-user',
        component: UserNewComponent,
        canActivate: [AdminGuard]
        },
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    },

// otherwise redirect to home
{
    path: '**',
    redirectTo: ''
}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}