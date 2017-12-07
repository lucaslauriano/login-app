import {Component, OnInit} from '@angular/core';

import {User} from '../user/user.model';
import {UserService} from '../user/user.service';

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

    constructor(private userService : UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.isSuperUser = this.currentUser.isSuperUser; 
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id : number) {
        this
            .userService
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