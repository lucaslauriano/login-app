import {Component, OnInit, Input} from '@angular/core';

@Component(
    {
        selector: 'app-nav', 
        templateUrl: './nav.component.html', 
        styleUrls: ['./nav.component.css']
    }
)
export class NavComponent implements OnInit {

    @Input() showMenu : boolean = false;
    events = [];

    shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    
    constructor() {}

    ngOnInit() {
    }

}
