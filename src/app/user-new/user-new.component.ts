import {Component, OnInit} from '@angular/core';

@Component(
    {selector: 'app-user-new', 
    templateUrl: './user-new.component.html', 
    styleUrls: ['./user-new.component.css']})
    
export class UserNewComponent implements OnInit {

    hideSenha = true;
    hideConfirmaSenha = true;

    constructor() {}

    ngOnInit() {

    }
}
