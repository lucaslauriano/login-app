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
    private isSuperUser = false;

    constructor(private userService : UserService,
                private route : ActivatedRoute, 
                private router : Router) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isSuperUser = this.currentUser.isSuperUser; 
    }

    ngOnInit() {
       
    }
}