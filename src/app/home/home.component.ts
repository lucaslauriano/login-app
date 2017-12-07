import {Component, OnInit} from '@angular/core';

import {User} from '../users/user/user.model';
import {UserService} from '../users/user/user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {MessageService} from '../common/message/message.service';

@Component(
    {   moduleId: module.id.toString(),
        selector: 'app-home', 
        templateUrl: './home.component.html', 
        styleUrls: ['./home.component.css']
    }
)
export class HomeComponent implements OnInit {
    
    currentUser : User;
    users : User[] = [];
    private isSuperUser = false;

    constructor(private userService : UserService,
                private route : ActivatedRoute, 
                private router : Router) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isSuperUser = this.currentUser.isSuperUser; 
    }

    ngOnInit() {
        this.loadAllUsers();
        console.log('A', this.route);
        console.log('A', this.router);
    }

    deleteUser(id : number) {
        this.userService
            .delete(id)
            .subscribe(() => {
                this.loadAllUsers()
            });
    }

    private loadAllUsers() {
        this
            .userService
            .getAll()
            .subscribe(users => {
                this.users = users;
            });
    }
}