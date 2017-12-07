import {Component} from '@angular/core';
import {AuthService} from './common/auth/auth.service';
import {UserService} from './user/user.service';
import { USER } from './user/user.mocks';
import {MessageService} from './common/message/message.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';
    showMenuEmitter: boolean = false;
    hideNav = true;
    firstUser = USER[0];

    constructor(private authService: AuthService,
                private userService: UserService,
                private messageService: MessageService,
                private router: Router) {
            
        this.firstAccess();
    }

    firstAccess(){
        if (!localStorage.users) {
            this.userService.create(this.firstUser).subscribe(data => {
                this.messageService .success('Primeiro Acesso - Login: admin | Senha: admin', true);
                }, error => {
                this.messageService.error(error);
            }); 
            //Descomentar linha abaixo para limpar memoria
            /*  localStorage.removeItem('users');  */
        }
    }

    ngOnInit() {
        this.authService.showMenuEmitter.subscribe(
            showMenu => this.showMenuEmitter = showMenu
        );
        
    }
}


