import {Component, OnInit} from '@angular/core';

@Component(
    {selector: 'app-users', 
    templateUrl: './users.component.html', 
    styleUrls: ['./users.component.css']})
    
export class UsersComponent implements OnInit {
    users = [
        {
            name: 'Luke Skywalker',
            isSuperUser: true
        }, {
            name: 'Darth Vader',
            isSuperUser: false
        }, {
            name: 'Obi-Wan',
            isSuperUser: false
        }
    ];
    constructor() {}

    ngOnInit() {

    }
}
