import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MessageService} from '../../common/message/message.service';
import {UserService} from '../user/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component(
    {selector: 'app-user-new', 
    templateUrl: './user-new.component.html', 
    styleUrls: ['./user-new.component.css']})
    
export class UserNewComponent  {
    user : any = {};
    
    loading = false;
    email = new FormControl('', [Validators.required, Validators.email]);
    hideSenha = true;
    
    hideConfirmaSenha = true;

   constructor(private router : Router, 
            private userService : UserService, 
            private messageService : MessageService) {
            }
    ngOnInit(){
        this.user.isSuperUser = false;
    }       
    
    goHome() {
        this.router.navigate(['/home']);
    }   

    save() {
        console.log('registrando');
        this.loading = true;
        this.userService.create(this.user).subscribe(data => {
        
        console.log('register', data);
        this.messageService.success('Cadastro efetuado com Successo', true);
        this.router.navigate(['/home']);

        }, error => {
            this.messageService.error(error);
            this.loading = false;
        });
    }
}
