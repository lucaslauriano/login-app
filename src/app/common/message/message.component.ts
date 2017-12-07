import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';

@Component({
   moduleId: module.id.toString(),
   selector: 'app-message',
   templateUrl: './message.component.html',
   styleUrls: ['./message.component.css']
})
export class MessageComponent {

message : any;

constructor( private messageService : MessageService) {}

ngOnInit() {
  this
    .messageService
    .getMessage()
    .subscribe(message => {
      this.message = message;
    });
}



}


