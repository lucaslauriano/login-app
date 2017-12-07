import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MessageService } from '../common/message/message.service';
import { AuthService } from '../common/auth/auth.service';

@Component(
    {
     selector: 'app-login',
     templateUrl: './login.component.html', 
     styleUrls: ['./login.component.css']
    }
)
    
export class LoginComponent {
    hide = true;
    user : any = {};
    loading = false;
    returnUrl : string;

constructor(private route : ActivatedRoute, 
            private router : Router,
            private authService : AuthService,
            private messageService : MessageService) {}

    ngOnInit() {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/' || '' || 'home';

        console.log('A',this.returnUrl);
        console.log('A', this.route);
        console.log('A', this.router);
    }
   
    login() {
        this.loading = true;
        this.authService.login(this.user.username, this.user.password).subscribe(data => {
             this.messageService.success('Bem vindo');
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.messageService.error(error);
            this.loading = false;
        });
    }
}
