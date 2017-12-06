import {Component, OnInit, Input} from '@angular/core';
import {UserPipe} from '../user/user.pipe';

@Component(
    {selector: 'app-users', 
    templateUrl: './users.component.html', 
    styleUrls: ['./users.component.css']})
    
export class UsersComponent implements OnInit {
    @Input() users : Array <any>;
    
    constructor() {}

    ngOnInit() {

    }
}
