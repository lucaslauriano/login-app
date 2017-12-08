import {Component, OnInit, Input} from '@angular/core';
import {UserPipe} from './user/user.pipe';
import {UserService} from './user/user.service';
import {User} from './user/user.model';
import {Router} from '@angular/router';
import {MessageService} from '../common/message/message.service';

@Component(
    {selector: 'app-users', 
    templateUrl: './users.component.html', 
    styleUrls: ['./users.component.css']})
    
export class UsersComponent implements OnInit {

    @Input() users : Array <any>;

    user : any = {};
    currentUser : User;
    isSuperUser = false;

    constructor(private router : Router,
                private userService : UserService, 
                private messageService : MessageService) {
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

                this.isSuperUser = this.currentUser.isSuperUser;
    }

    deleteUser(id) {
        this.userService.delete(id).subscribe(data => {
            this.messageService.success("Excluído com Sucesso");
        }, error => {
            this.messageService.error(error);
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    /* deleteUser(id : number) {
        this.userService
            .delete(id)
            .subscribe(() => {
                this.loadAllUsers()
            });
    } */

    private loadAllUsers() {
        this
            .userService
            .getAll()
            .subscribe(users => {
                this.users = users;
            });
    }
}
