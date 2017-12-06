import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MessageService } from '../common/message/message.service';
import { AuthService } from '../common/auth/auth.service';

@Component(
    {moduleId: module.id.toString(), 
     selector: 'app-login',
     templateUrl: './login.component.html', 
     styleUrls: ['./login.component.css']
    }
)
    
export class LoginComponent implements OnInit {
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
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log('this.returnUrl', this.returnUrl)
    }

    login() {
        console.log('acessando');
        this.loading = true;
        this.authService.login(this.user.username, this.user.password).subscribe(data => {
                console.log('login', data);
                this.router.navigate([this.returnUrl]);
        }, error => {
            this.messageService.error(error);
            this.loading = false;
        });
    }
}
