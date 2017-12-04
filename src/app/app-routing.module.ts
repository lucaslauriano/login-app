import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';

const routes : Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'user/:id',
        component: UserComponent
    }, {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}