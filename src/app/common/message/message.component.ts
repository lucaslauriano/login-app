import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {MatSnackBar} from '@angular/material';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
]

})

export class MessageComponent {
  
  message : any;

  constructor(private messageService : MessageService, private matSnackBar : MatSnackBar,) {}

    ngOnInit() {
      this.messageService.getMessage().subscribe(message => {
          this.message = message;
            /* this.showSnackBar(this.message, 'OK'); */
        });
    }
    showSnackBar(message : string, action : string) {
        this.matSnackBar.open(message, action, {duration: 5000});
    }
}

