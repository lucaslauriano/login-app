import {Component} from '@angular/core';
import {AuthService} from './common/auth/auth.service';
import {UserService} from './users/user/user.service';
import {USER} from './users/user/user.mocks';
import {User} from './users/user/user.model';
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
    currentUser: User;
    private user = USER[0];

    constructor(private authService: AuthService,
                private userService: UserService,
                private messageService: MessageService,
                private router: Router) {}


    ngOnInit() {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       
        if (!this.currentUser) {
            this.firstAccess(this.user, this.currentUser);
        }
        this.authService.showMenuEmitter.subscribe(
            showMenu => this.showMenuEmitter = showMenu
        ); 

        //Descomentar linha abaixo para limpar memoria
        //localStorage.removeItem('users'); 
        
    }

    firstAccess(user, currentUser) {

        this
            .userService
            .create(user)
            .subscribe(data => {
                this
                    .messageService
                    .success('Primeiro Acesso - Login: admin | Senha: admin', true);
            }, error => {
                console.log('Usuário já criado')
            });

     
    }

}


